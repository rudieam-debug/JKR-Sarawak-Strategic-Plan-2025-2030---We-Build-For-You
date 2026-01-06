
import React, { useState, Fragment, useEffect } from 'react';
import { Download, Loader2, X, CheckSquare, Square, CheckCircle, Eye, DownloadCloud } from 'lucide-react';
import { createRoot } from 'react-dom/client';
import { navItems } from '../assets/strategicData';
import { sectionPrintComponentMap, getComponentProps } from './PrintComponents';

// Extend the Window interface for TypeScript to recognize the libraries
declare global {
  interface Window {
    html2canvas: any;
    jspdf: any;
  }
}

const downloadableSections = [
  {
    group: 'Strategy',
    items: navItems.find(i => i.id === 'strategy')?.children || []
  },
  {
    group: 'Operations',
    items: navItems.find(i => i.id === 'operations')?.children || []
  }
];

export const PDFDownloadButton: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportTitle, setReportTitle] = useState('Strategic Plan Report');
  const [selectedSections, setSelectedSections] = useState(() => new Set(downloadableSections.flatMap(g => g.items.map(i => i.id))));
  const [progressMessage, setProgressMessage] = useState('');
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  const handleToggleSection = (sectionId: string) => {
    setSelectedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) newSet.delete(sectionId);
      else newSet.add(sectionId);
      return newSet;
    });
  };

  const handleSelectGroup = (groupItems: any[]) => {
    setSelectedSections(prev => {
        const newSet = new Set(prev);
        groupItems.forEach(item => newSet.add(item.id));
        return newSet;
    });
  };
  
  const handleDeselectGroup = (groupItems: any[]) => {
    setSelectedSections(prev => {
        const newSet = new Set(prev);
        groupItems.forEach(item => newSet.delete(item.id));
        return newSet;
    });
  };

  const handleCloseAndReset = () => {
    setIsModalOpen(false);
    setTimeout(() => {
        if (pdfUrl) {
            URL.revokeObjectURL(pdfUrl);
        }
        setPdfUrl(null);
        setIsDownloading(false);
        setProgressMessage('');
    }, 300);
  };

  const handleGenerate = async () => {
    if (!window.html2canvas || !window.jspdf) {
      alert("PDF generation libraries are not loaded yet. Please try again in a moment.");
      return;
    }
    if (selectedSections.size === 0) {
      alert("Please select at least one section to include in the PDF.");
      return;
    }

    setIsDownloading(true);
    setProgressMessage('Initializing PDF...');

    let printContainer: HTMLDivElement | null = null;
    let root: ReturnType<typeof createRoot> | null = null;

    try {
      const { jsPDF } = window.jspdf;
      // Use landscape A4 for better screenshot layout, or Portrait if preferred. Using Portrait for standard reports.
      const pdf = new jsPDF('p', 'pt', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const hMargin = 20; // Reduced margins for "Screenshot" feel
      const contentMarginTop = 40; 
      const contentMarginBottom = 40; 
      const contentWidth = pdfWidth - hMargin * 2;
      const pageContentHeight = pdfHeight - contentMarginTop - contentMarginBottom;

      // Title Page
      pdf.setFillColor('#0F172A'); // Dark background
      pdf.rect(0, 0, pdfWidth, pdfHeight, 'F');
      
      pdf.setTextColor('#F8FAFC');
      pdf.setFontSize(32);
      pdf.setFont('helvetica', 'bold');
      pdf.text(reportTitle, pdfWidth / 2, pdfHeight / 2 - 40, { align: 'center' });
      
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor('#94A3B8');
      pdf.text("JKR Sarawak Strategic Plan 2025-2030", pdfWidth / 2, pdfHeight / 2, { align: 'center' });
      
      pdf.setFontSize(10);
      pdf.text(`Report Generated on: ${new Date().toLocaleString()}`, pdfWidth / 2, pdfHeight - 60, { align: 'center' });

      const sectionsToRender = downloadableSections.flatMap(g => g.items).filter(item => selectedSections.has(item.id));
      
      // Create a container that mimics the app's width/environment
      printContainer = document.createElement('div');
      printContainer.style.position = 'absolute';
      printContainer.style.left = '-9999px';
      printContainer.style.top = '0';
      // Width set to standard desktop to ensure grid layouts render correctly (3 cols etc)
      printContainer.style.width = '1280px'; 
      printContainer.style.backgroundColor = '#0F172A'; // Match App Background
      printContainer.classList.add('dark'); // Force dark mode tailwind classes
      document.body.appendChild(printContainer);
      
      root = createRoot(printContainer);

      for (let i = 0; i < sectionsToRender.length; i++) {
        const section = sectionsToRender[i];
        setProgressMessage(`Capturing ${section.label} (${i + 1}/${sectionsToRender.length})...`);
        
        pdf.addPage();
        // Fill background for new page
        pdf.setFillColor('#0F172A');
        pdf.rect(0, 0, pdfWidth, pdfHeight, 'F');
        
        try {
            const Component = sectionPrintComponentMap[section.id];
            if (!Component) continue;

            const componentProps = getComponentProps(section.id);
            
            // Render with a wrapper to provide padding/context similar to main app
            await new Promise<void>(resolve => {
                root!.render(
                    <div className="p-10 bg-[#0F172A] text-slate-200 min-h-screen font-sans">
                        <Component {...componentProps} />
                    </div>
                );
                // Increased wait time for Charts and Images to fully render
                setTimeout(resolve, 2500); 
            });

            if (!printContainer) throw new Error("Container lost");

            const canvas = await window.html2canvas(printContainer, {
                scale: 2, // Higher scale for crisp text
                useCORS: true,
                logging: false,
                backgroundColor: '#0F172A', // Ensure background is captured
                windowWidth: 1280
            });

            const imgData = canvas.toDataURL('image/png');
            const imgProps = pdf.getImageProperties(imgData);
            const imgRatio = imgProps.height / imgProps.width;
            
            // Calculate height based on PDF content width
            const scaledHeight = contentWidth * imgRatio;
            
            let heightLeft = scaledHeight;
            let position = 0;
            let pageIdx = 0;

            // First page of section
            pdf.addImage(imgData, 'PNG', hMargin, contentMarginTop, contentWidth, scaledHeight, undefined, 'FAST');
            heightLeft -= pageContentHeight;

            // Pagination for long sections
            while (heightLeft > 0) {
                position = -pageContentHeight * (pageIdx + 1); // Move image up
                pdf.addPage();
                pdf.setFillColor('#0F172A');
                pdf.rect(0, 0, pdfWidth, pdfHeight, 'F');
                
                // We use a clipping rectangle or just rely on the image positioning off-page
                // jsPDF doesn't have simple native clipping for addImage without plugins in some versions, 
                // but positioning negative Y usually works to show the next chunk.
                pdf.addImage(imgData, 'PNG', hMargin, contentMarginTop + position, contentWidth, scaledHeight, undefined, 'FAST');
                
                heightLeft -= pageContentHeight;
                pageIdx++;
            }

        } catch (sectionError) {
            console.error(`Failed to render section "${section.label}":`, sectionError);
        }
      }

      setProgressMessage('Finalizing document...');
      const totalPages = pdf.internal.getNumberOfPages();
      
      // Footer
      for (let i = 2; i <= totalPages; i++) {
          pdf.setPage(i);
          pdf.setFontSize(8);
          pdf.setTextColor('#64748b');
          pdf.text(`JKR Sarawak - ${reportTitle} - Page ${i}`, pdfWidth / 2, pdfHeight - 20, { align: 'center' });
      }

      const pdfBlob = pdf.output('blob');
      const url = URL.createObjectURL(pdfBlob);
      setPdfUrl(url);
      window.open(url, '_blank');

    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("An error occurred. Please check console.");
      handleCloseAndReset();
    } finally {
      if (root) root.unmount();
      if(printContainer && document.body.contains(printContainer)) document.body.removeChild(printContainer);
      setIsDownloading(false);
    }
  };

  return (
    <Fragment>
      <button
        id="pdf-download-button"
        onClick={() => setIsModalOpen(true)}
        className="flex items-center space-x-2 px-3 py-2 text-xs sm:text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover transition-colors shadow-sm"
      >
        <Download className="w-4 h-4" />
        <span className="hidden sm:inline">PDF Report</span>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]" role="dialog" aria-modal="true">
          <div className="bg-surface rounded-xl shadow-2xl w-full max-w-lg m-4 transform transition-all border border-border">
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h3 className="text-lg font-bold text-text-primary">Generate PDF Report</h3>
              {(!isDownloading && !pdfUrl) && <button onClick={handleCloseAndReset} className="p-1 rounded-full hover:bg-surface-light">
                <X className="w-5 h-5 text-text-secondary" />
              </button>}
            </div>
            
            <div className="max-h-[70vh] overflow-y-auto">
              {isDownloading ? (
                  <div className="p-10 flex flex-col items-center justify-center text-center min-h-[300px]">
                      <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
                      <p className="font-semibold text-text-primary">Capturing Dashboard Content...</p>
                      <p className="text-sm text-text-secondary mt-1">{progressMessage}</p>
                  </div>
              ) : pdfUrl ? (
                  <div className="p-10 flex flex-col items-center justify-center text-center min-h-[300px]">
                      <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                      <h4 className="text-lg font-semibold text-text-primary">Report Ready!</h4>
                      <p className="text-sm text-text-secondary mt-1">The report has been generated successfully.</p>
                  </div>
              ) : (
                  <div className="p-6 space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Report Title</label>
                      <input type="text" value={reportTitle} onChange={e => setReportTitle(e.target.value)} className="w-full bg-background border border-border rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-text-primary"/>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-secondary mb-2">Select Sections</p>
                      <div className="space-y-4">
                        {downloadableSections.map(group => (
                          <div key={group.group} className="bg-surface-light p-3 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                               <h4 className="font-semibold text-text-primary">{group.group}</h4>
                               <div>
                                  <button onClick={() => handleSelectGroup(group.items)} className="text-xs font-semibold text-blue-400 hover:underline mr-3">All</button>
                                  <button onClick={() => handleDeselectGroup(group.items)} className="text-xs font-semibold text-blue-400 hover:underline">None</button>
                               </div>
                            </div>
                            <div className="space-y-2">
                              {group.items.map(item => (
                                <label key={item.id} className="flex items-center space-x-3 p-2 rounded-md hover:bg-surface cursor-pointer">
                                  <input type="checkbox" className="hidden" checked={selectedSections.has(item.id)} onChange={() => handleToggleSection(item.id)} />
                                  {selectedSections.has(item.id) ? <CheckSquare className="w-5 h-5 text-primary" /> : <Square className="w-5 h-5 text-text-muted" />}
                                  <span className="text-text-primary text-sm">{item.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
              )}
            </div>
            
            <div className="flex justify-end p-4 bg-surface-light border-t border-border rounded-b-xl">
              {isDownloading ? null : pdfUrl ? (
                <div className="flex justify-between items-center w-full">
                    <button onClick={handleCloseAndReset} className="px-4 py-2 text-sm font-semibold text-text-primary bg-surface border border-border rounded-lg hover:bg-surface-light">Close</button>
                    <div className="flex items-center space-x-2">
                        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-lg hover:bg-primary/20">
                            <Eye className="w-4 h-4" /> <span>Open</span>
                        </a>
                         <a href={pdfUrl} download={`${reportTitle.replace(/\s+/g, '-')}.pdf`} className="flex items-center justify-center space-x-2 px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover">
                            <DownloadCloud className="w-4 h-4" /> <span>Download</span>
                        </a>
                    </div>
                </div>
              ) : (
                <div className="flex gap-2">
                  <button onClick={handleCloseAndReset} className="px-4 py-2 text-sm font-semibold text-text-primary bg-surface border border-border rounded-lg hover:bg-surface-light">Cancel</button>
                  <button onClick={handleGenerate} disabled={selectedSections.size === 0} className="flex items-center justify-center space-x-2 px-6 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover disabled:bg-gray-600 disabled:cursor-not-allowed">
                    <span>Generate PDF</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
