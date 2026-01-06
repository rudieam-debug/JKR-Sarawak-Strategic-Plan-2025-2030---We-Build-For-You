
import React, { useState } from 'react';
import type { FooterData } from '../types';
import { EditableText } from './EditableText';
import { Edit, Save, X } from 'lucide-react';

interface FooterProps {
  isAdminMode: boolean;
  data: FooterData;
  onUpdate: (field: 'tagline' | 'copyright' | 'linkText' | 'linkHref', value: string, linkIndex?: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ isAdminMode, data, onUpdate }) => {
  const [editingUrlIndex, setEditingUrlIndex] = useState<number | null>(null);
  const [urlValue, setUrlValue] = useState('');

  const handleEditUrlClick = (index: number, currentHref: string) => {
    setEditingUrlIndex(index);
    setUrlValue(currentHref);
  };

  const handleCancelUrlEdit = () => {
    setEditingUrlIndex(null);
    setUrlValue('');
  };

  const handleSaveUrl = (index: number) => {
    onUpdate('linkHref', urlValue, index);
    setEditingUrlIndex(null);
    setUrlValue('');
  };

  return (
    <footer className="bg-surface-light text-text-primary mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <EditableText
            isAdminMode={isAdminMode}
            initialValue={data.tagline}
            onSave={(newValue) => onUpdate('tagline', newValue)}
            label="Footer Tagline"
            isTextarea
            textClassName="text-xl font-bold mb-4 text-primary whitespace-pre-line leading-relaxed"
            inputClassName="text-xl font-bold"
          />
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-4 text-sm text-text-secondary">
            {data.links.map((link, index) => (
              <div key={index} className="group/container">
                {isAdminMode && editingUrlIndex === index ? (
                   <div className="flex items-center space-x-1 relative w-64">
                    <input
                      type="url"
                      value={urlValue}
                      onChange={(e) => setUrlValue(e.target.value)}
                      className="w-full text-xs bg-surface border border-primary rounded px-2 py-1 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                      autoFocus
                      onKeyDown={(e) => e.key === 'Enter' && handleSaveUrl(index)}
                    />
                    <div className="flex">
                      <button onClick={() => handleSaveUrl(index)} className="p-1.5 rounded-full hover:bg-green-500/20 text-green-400" title="Save URL"><Save className="w-4 h-4" /></button>
                      <button onClick={handleCancelUrlEdit} className="p-1.5 rounded-full hover:bg-border text-text-muted" title="Cancel"><X className="w-4 h-4" /></button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center group/link">
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                      <EditableText
                        as="span"
                        isAdminMode={isAdminMode}
                        initialValue={link.text}
                        onSave={(newValue) => onUpdate('linkText', newValue, index)}
                        label={`Footer Link ${index + 1} Text`}
                      />
                    </a>
                    {isAdminMode && (
                      <button
                        onClick={() => handleEditUrlClick(index, link.href)}
                        className="ml-2 p-1.5 rounded-full hover:bg-blue-500/20 text-blue-400 opacity-0 group-hover/link:opacity-100 transition-opacity"
                        title={`Edit URL for ${link.text}`}
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-text-muted text-xs leading-relaxed border-t border-border pt-6">
            <p className="font-semibold text-text-secondary">Public Works Department, Sarawak</p>
            <p>Wisma Saberkas, Jalan Tun Abang Haji Openg</p>
            <p>93582 Kuching, Sarawak, Malaysia</p>
            <div className="mt-3 flex justify-center items-center gap-x-6 gap-y-1 flex-wrap">
              <p>Tel: 082-203100, 082-203101</p>
              <p>Fax: 082-240097</p>
              <a href="mailto:corporatejkr@gmail.com" className="hover:text-primary transition-colors">Email: corporatejkr@gmail.com</a>
            </div>
          </div>

          <EditableText
            isAdminMode={isAdminMode}
            initialValue={data.copyright}
            onSave={(newValue) => onUpdate('copyright', newValue)}
            label="Copyright Notice"
            textClassName="mt-8 text-text-muted text-xs"
            inputClassName="text-xs"
          />
        </div>
      </div>
    </footer>
  );
};
