import React from 'react';
import { Loader2, X, CheckCircle, Eye, DownloadCloud } from 'lucide-react';

interface ReportGenerationOverlayProps {
  isOpen: boolean;
  progressMessage: string;
  pdfUrl: string | null;
  onClose: () => void;
}

export const ReportGenerationOverlay: React.FC<ReportGenerationOverlayProps> = ({ isOpen, progressMessage, pdfUrl, onClose }) => {
    if (!isOpen) return null;

    const isLoading = !pdfUrl;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[200]" role="dialog" aria-modal="true">
          <div className="bg-surface rounded-xl shadow-2xl w-full max-w-md m-4 transform transition-all border border-border">
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h3 className="text-lg font-bold text-text-primary">Generating Report</h3>
              {/* Allow closing only when not loading */}
              {!isLoading && (
                <button onClick={onClose} className="p-1 rounded-full hover:bg-surface-light">
                  <X className="w-5 h-5 text-text-secondary" />
                </button>
              )}
            </div>
            
            <div className="min-h-[200px] flex flex-col items-center justify-center text-center p-10">
              {isLoading ? (
                  <>
                      <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
                      <p className="font-semibold text-text-primary">Generating your report...</p>
                      <p className="text-sm text-text-secondary mt-1">{progressMessage}</p>
                  </>
              ) : (
                  <>
                      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                      <h4 className="text-xl font-semibold text-text-primary">Report Ready!</h4>
                      <p className="text-sm text-text-secondary mt-1">Your PDF report has opened in a new tab.</p>
                  </>
              )}
            </div>
            
            <div className="flex justify-between items-center p-4 bg-surface-light border-t border-border rounded-b-xl">
              <button onClick={onClose} className="px-4 py-2 text-sm font-semibold text-text-primary bg-surface border border-border rounded-lg hover:bg-surface-light">
                Close
              </button>
              {!isLoading && pdfUrl && (
                  <div className="flex items-center space-x-2">
                      <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-lg hover:bg-primary/20">
                          <Eye className="w-4 h-4" />
                          <span>View Again</span>
                      </a>
                      <a href={pdfUrl} download="JKR-Sarawak-Annual-Report.pdf" className="flex items-center justify-center space-x-2 px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover">
                          <DownloadCloud className="w-4 h-4" />
                          <span>Download</span>
                      </a>
                  </div>
              )}
            </div>
          </div>
        </div>
    );
};
