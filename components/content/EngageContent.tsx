import React, { useState } from 'react';
import type { EngagementChannel, EngagePageContent } from '../../types';
import { EditableText } from '../EditableText';
import { Edit, Save, X } from 'lucide-react';

interface EngageContentProps {
  isAdminMode?: boolean;
  channels?: EngagementChannel[];
  pageContent?: EngagePageContent;
  onUpdateChannel?: (id: number, field: keyof Omit<EngagementChannel, 'id' | 'icon' | 'color' | 'buttonColor'>, value: string) => void;
  onUpdatePageContent?: (field: keyof Omit<EngagePageContent, 'governanceInitiatives' | 'mediaInitiatives'>, value: string) => void;
  onUpdateInitiativeText?: (section: 'governance' | 'media', id: number, value: string, field: 'strong' | 'text') => void;
  onOpenMediaLibrary: (callback: (url: string) => void) => void;
  onSummarize: (text: string, title: string) => void;
  onGenerateAnnualReport?: () => void;
}

export const EngageContent: React.FC<EngageContentProps> = ({
  isAdminMode = false,
  channels = [],
  pageContent,
  onUpdateChannel,
  onUpdatePageContent,
  onUpdateInitiativeText,
  onOpenMediaLibrary,
  onSummarize,
  onGenerateAnnualReport,
}) => {
  if (!pageContent) return <div>Loading...</div>;

  const [editingUrlId, setEditingUrlId] = useState<number | null>(null);
  const [urlValue, setUrlValue] = useState('');

  const handleEditUrlClick = (id: number, currentHref: string) => {
    setEditingUrlId(id);
    setUrlValue(currentHref);
  };

  const handleCancelUrlEdit = () => {
    setEditingUrlId(null);
    setUrlValue('');
  };

  const handleSaveUrl = (id: number) => {
    if (onUpdateChannel) {
      onUpdateChannel(id, 'href', urlValue);
    }
    setEditingUrlId(null);
    setUrlValue('');
  };

  return (
    <div className="space-y-10">
      <div className="text-center mb-12">
        <EditableText isAdminMode={isAdminMode} initialValue={pageContent.mainTitle} onSave={(newValue) => onUpdatePageContent && onUpdatePageContent('mainTitle', newValue)} label="Main Title" textClassName="text-3xl font-bold text-text-primary mb-2" inputClassName="text-3xl font-bold text-center" />
        <EditableText isAdminMode={isAdminMode} initialValue={pageContent.mainSubtitle} onSave={(newValue) => onUpdatePageContent && onUpdatePageContent('mainSubtitle', newValue)} label="Main Subtitle" textClassName="text-text-secondary max-w-4xl mx-auto" isTextarea onSummarize={() => onSummarize(pageContent.mainSubtitle, 'Engagement Strategy')} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {channels.map((channel) => {
          const Icon = channel.icon as React.ElementType;
          const handleIconEdit = () => {
              onOpenMediaLibrary((url) => {
                  onUpdateChannel?.(channel.id, 'imgSrc', url);
              });
          };

          const buttonContent = (
             <EditableText isAdminMode={isAdminMode} initialValue={channel.buttonText} onSave={(newValue) => onUpdateChannel && onUpdateChannel(channel.id, 'buttonText', newValue)} label={`Channel ${channel.id} Button Text`} textClassName={`inline-block text-white px-6 py-2 rounded-full font-semibold transition-transform transform hover:scale-105 ${channel.buttonColor}`} inputClassName="font-semibold text-center" />
          );

          return (
            <div key={channel.id} className="bg-surface rounded-xl shadow-lg p-8 text-center border-b-4 border-border hover:border-primary transition-colors flex flex-col">
              <div className="flex-grow">
                 <div className="relative w-12 h-12 mx-auto mb-4 group/icon">
                    {channel.imgSrc ? (
                      <img src={channel.imgSrc} alt={channel.title} className="w-12 h-12 object-contain" />
                    ) : (
                      <Icon className={`w-12 h-12 ${channel.color}`} />
                    )}
                    {isAdminMode && (
                      <button onClick={handleIconEdit} className="absolute inset-0 w-full h-full bg-black/50 flex items-center justify-center opacity-0 group-hover/icon:opacity-100 transition-opacity rounded-full" title="Change Icon">
                          <Edit className="w-5 h-5 text-white" />
                      </button>
                    )}
                 </div>
                <EditableText isAdminMode={isAdminMode} initialValue={channel.title} onSave={(newValue) => onUpdateChannel && onUpdateChannel(channel.id, 'title', newValue)} label={`Channel ${channel.id} Title`} textClassName="text-xl font-bold text-text-primary mb-2" inputClassName="text-xl font-bold" />
                <EditableText isAdminMode={isAdminMode} initialValue={channel.description} onSave={(newValue) => onUpdateChannel && onUpdateChannel(channel.id, 'description', newValue)} label={`Channel ${channel.id} Description`} textClassName="text-text-muted mb-6 text-sm" isTextarea />
              </div>
              <div className="mt-auto">
                {isAdminMode && editingUrlId === channel.id ? (
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-text-muted">Channel URL</label>
                    <div className="flex items-center space-x-1">
                      <input type="url" value={urlValue} onChange={(e) => setUrlValue(e.target.value)} className="w-full text-sm bg-background border border-primary rounded px-2 py-1 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary" autoFocus onKeyDown={(e) => e.key === 'Enter' && handleSaveUrl(channel.id)} />
                      <button onClick={() => handleSaveUrl(channel.id)} className="p-1.5 rounded-full hover:bg-green-900 text-green-500" title="Save URL"><Save className="w-4 h-4" /></button>
                      <button onClick={handleCancelUrlEdit} className="p-1.5 rounded-full hover:bg-border text-text-muted" title="Cancel"><X className="w-4 h-4" /></button>
                    </div>
                  </div>
                ) : (
                  <div className="relative inline-block group/link">
                    {channel.id === 3 && onGenerateAnnualReport ? (
                      <button type="button" onClick={onGenerateAnnualReport}>
                          {buttonContent}
                      </button>
                    ) : (
                      <a href={channel.href} target="_blank" rel="noopener noreferrer">
                        {buttonContent}
                      </a>
                    )}
                    {isAdminMode && onUpdateChannel && channel.id !== 3 && (
                        <button onClick={() => handleEditUrlClick(channel.id, channel.href)} className="absolute -top-2 -right-8 p-1.5 rounded-full bg-blue-900 hover:bg-blue-800 text-blue-300 opacity-0 group-hover/link:opacity-100 transition-opacity" title="Edit Link URL">
                            <Edit className="w-4 h-4" />
                        </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-surface-light rounded-xl shadow-inner p-6 sm:p-8">
        <EditableText isAdminMode={isAdminMode} initialValue={pageContent.transparencyTitle} onSave={(newValue) => onUpdatePageContent && onUpdatePageContent('transparencyTitle', newValue)} label="Transparency Title" textClassName="text-2xl font-bold text-text-primary mb-4" inputClassName="text-2xl font-bold" />
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <EditableText isAdminMode={isAdminMode} initialValue={pageContent.governanceTitle} onSave={(newValue) => onUpdatePageContent && onUpdatePageContent('governanceTitle', newValue)} label="Governance Title" textClassName="font-semibold text-lg text-text-primary mb-2 border-b border-border pb-1" inputClassName="font-semibold text-lg" />
            <ul className="space-y-1 text-sm text-text-secondary">
              {pageContent.governanceInitiatives.map(item => (
                <li key={item.id}>
                  •{' '}
                  <EditableText as="strong" isAdminMode={isAdminMode} initialValue={item.strong} onSave={(newValue) => onUpdateInitiativeText && onUpdateInitiativeText('governance', item.id, newValue, 'strong')} label={`Governance Initiative ${item.id} Title`} textClassName="font-medium text-text-primary" />{' '}
                  <EditableText isAdminMode={isAdminMode} initialValue={item.text} onSave={(newValue) => onUpdateInitiativeText && onUpdateInitiativeText('governance', item.id, newValue, 'text')} label={`Governance Initiative ${item.id} Description`} textClassName="inline" />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <EditableText isAdminMode={isAdminMode} initialValue={pageContent.mediaTitle} onSave={(newValue) => onUpdatePageContent && onUpdatePageContent('mediaTitle', newValue)} label="Media Title" textClassName="font-semibold text-lg text-text-primary mb-2 border-b border-border pb-1" inputClassName="font-semibold text-lg" />
            <ul className="space-y-1 text-sm text-text-secondary">
              {pageContent.mediaInitiatives.map(item => (
                <li key={item.id}>
                  •{' '}
                   <EditableText as="strong" isAdminMode={isAdminMode} initialValue={item.strong} onSave={(newValue) => onUpdateInitiativeText && onUpdateInitiativeText('media', item.id, newValue, 'strong')} label={`Media Initiative ${item.id} Title`} textClassName="font-medium text-text-primary" />{' '}
                   <EditableText isAdminMode={isAdminMode} initialValue={item.text} onSave={(newValue) => onUpdateInitiativeText && onUpdateInitiativeText('media', item.id, newValue, 'text')} label={`Media Initiative ${item.id} Description`} textClassName="inline" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};