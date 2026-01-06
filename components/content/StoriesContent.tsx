
import React, { useState } from 'react';
import { Video, ChevronRight, Edit, PlusCircle, Trash2, Save, X } from 'lucide-react';
import { Badge } from '../Badge';
import { EditableText } from '../EditableText';
import type { SuccessStory, StoriesPageContent } from '../../types';

interface StoriesContentProps {
  isAdminMode?: boolean;
  canDelete?: boolean;
  stories?: SuccessStory[];
  pageContent?: StoriesPageContent;
  onUpdateStory?: (id: number, field: keyof Omit<SuccessStory, 'id' | 'gradient'>, value: string) => void;
  onUpdatePageContent?: (field: keyof StoriesPageContent, value: string) => void;
  onAddStory?: () => void;
  onDeleteStory?: (id: number) => void;
  onSummarize: (text: string, title: string) => void;
}

export const StoriesContent: React.FC<StoriesContentProps> = ({ 
  isAdminMode = false, 
  canDelete = false,
  stories = [], 
  pageContent,
  onUpdateStory,
  onUpdatePageContent,
  onAddStory,
  onDeleteStory,
  onSummarize,
}) => {
  if (!pageContent) return <div>Loading...</div>;

  const [editingUrlId, setEditingUrlId] = useState<number | null>(null);
  const [urlValue, setUrlValue] = useState('');

  const handleDelete = (id: number, title: string) => {
    if (window.confirm(`Are you sure you want to delete the story "${title}"?`)) {
      onDeleteStory?.(id);
    }
  };

  const handleEditUrlClick = (id: number, currentHref: string) => {
    setEditingUrlId(id);
    setUrlValue(currentHref);
  };

  const handleCancelUrlEdit = () => {
    setEditingUrlId(null);
    setUrlValue('');
  };

  const handleSaveUrl = (id: number) => {
    if (onUpdateStory) {
      onUpdateStory(id, 'href', urlValue);
    }
    setEditingUrlId(null);
    setUrlValue('');
  };


  return (
    <div className="space-y-10">
      <div className="text-center mb-12">
        <EditableText
          isAdminMode={isAdminMode}
          initialValue={pageContent.mainTitle}
          onSave={(newValue) => onUpdatePageContent && onUpdatePageContent('mainTitle', newValue)}
          label="Main Title"
          textClassName="text-3xl font-bold text-text-primary mb-2"
          inputClassName="text-3xl font-bold text-center"
        />
        <EditableText
          isAdminMode={isAdminMode}
          initialValue={pageContent.mainSubtitle}
          onSave={(newValue) => onUpdatePageContent && onUpdatePageContent('mainSubtitle', newValue)}
          label="Main Subtitle"
          textClassName="text-text-secondary max-w-4xl mx-auto"
          isTextarea
          onSummarize={() => onSummarize(pageContent.mainSubtitle, 'Success Stories Introduction')}
        />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div key={story.id} className="group relative bg-surface rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl border border-border">
             {isAdminMode && canDelete && onDeleteStory && (
                <button 
                  onClick={() => handleDelete(story.id, story.title)}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-red-900 hover:bg-red-800 text-red-300 opacity-0 group-hover:opacity-100 transition-opacity z-10" 
                  title="Delete Story"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            <div className={`h-40 bg-gradient-to-r ${story.gradient} flex items-center justify-center p-4`}>
              <Video className="w-12 h-12 text-white/80" />
            </div>
            <div className="p-6">
              <EditableText
                isAdminMode={isAdminMode}
                initialValue={story.title}
                onSave={(newValue) => onUpdateStory && onUpdateStory(story.id, 'title', newValue)}
                label={`Story ${story.id} Title`}
                textClassName="text-xl font-bold text-text-primary mb-1"
                inputClassName="text-xl font-bold"
              />
              <EditableText
                isAdminMode={isAdminMode}
                initialValue={story.subtitle}
                onSave={(newValue) => onUpdateStory && onUpdateStory(story.id, 'subtitle', newValue)}
                label={`Story ${story.id} Subtitle`}
                textClassName="text-primary font-medium mb-3"
                inputClassName="font-medium"
              />
              <EditableText
                isAdminMode={isAdminMode}
                initialValue={story.description}
                onSave={(newValue) => onUpdateStory && onUpdateStory(story.id, 'description', newValue)}
                label={`Story ${story.id} Description`}
                textClassName="text-text-secondary text-sm"
                isTextarea
                onSummarize={() => onSummarize(story.description, story.title)}
              />
               <div className="mt-4">
                {isAdminMode && editingUrlId === story.id ? (
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-text-muted">Video URL</label>
                    <div className="flex items-center space-x-1">
                      <input
                        type="url"
                        value={urlValue}
                        onChange={(e) => setUrlValue(e.target.value)}
                        className="w-full text-sm bg-background border border-primary rounded px-2 py-1 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        autoFocus
                        onKeyDown={(e) => e.key === 'Enter' && handleSaveUrl(story.id)}
                      />
                      <button onClick={() => handleSaveUrl(story.id)} className="p-1.5 rounded-full hover:bg-green-900 text-green-500" title="Save URL"><Save className="w-4 h-4" /></button>
                      <button onClick={handleCancelUrlEdit} className="p-1.5 rounded-full hover:bg-border text-text-muted" title="Cancel"><X className="w-4 h-4" /></button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <a
                      href={story.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center transition-colors group/link"
                    >
                      <EditableText
                        as="span"
                        isAdminMode={isAdminMode}
                        initialValue={story.buttonText}
                        onSave={(newValue) => onUpdateStory && onUpdateStory(story.id, 'buttonText', newValue)}
                        label={`Story ${story.id} Button Text`}
                      />
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                    {isAdminMode && onUpdateStory && (
                      <button
                        onClick={() => handleEditUrlClick(story.id, story.href)}
                        className="p-1.5 rounded-full hover:bg-blue-900 text-blue-500 opacity-0 group-hover/link:opacity-100 transition-opacity"
                        title="Edit Link URL"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {isAdminMode && onAddStory && (
          <button onClick={onAddStory} className="flex flex-col items-center justify-center bg-surface rounded-xl shadow-lg p-6 border-2 border-dashed border-border hover:border-primary hover:text-primary transition-all text-text-muted">
              <PlusCircle className="w-10 h-10 mb-2" />
              <span className="font-bold text-lg">Add New Story</span>
          </button>
        )}
      </div>
      
      <div className="bg-surface-light text-text-primary rounded-xl shadow-lg p-6 sm:p-8">
        <EditableText
          isAdminMode={isAdminMode}
          initialValue={pageContent.knowledgeSharingTitle}
          onSave={(newValue) => onUpdatePageContent && onUpdatePageContent('knowledgeSharingTitle', newValue)}
          label="Knowledge Sharing Title"
          textClassName="text-2xl font-bold mb-4"
          inputClassName="text-2xl font-bold"
        />
        <EditableText
          isAdminMode={isAdminMode}
          initialValue={pageContent.knowledgeSharingBody}
          onSave={(newValue) => onUpdatePageContent && onUpdatePageContent('knowledgeSharingBody', newValue)}
          label="Knowledge Sharing Body"
          textClassName="text-text-secondary mb-6"
          isTextarea
          onSummarize={() => onSummarize(pageContent.knowledgeSharingBody, 'Knowledge Sharing Commitment')}
        />
        <div className="flex flex-wrap gap-4">
          <Badge text="2025: 3 Stories Published" color="bg-blue-600" />
          <Badge text="Target: 10+ Stories/Year" color="bg-red-600" />
          <Badge text="Platforms: YouTube, Facebook, MyJKR App" color="bg-purple-600" />
        </div>
      </div>
    </div>
  );
};
