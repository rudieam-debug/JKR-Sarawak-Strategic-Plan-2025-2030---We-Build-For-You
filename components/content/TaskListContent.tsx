
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Circle, 
  Search, 
  Filter, 
  AlertCircle, 
  Clock, 
  MoreVertical,
  ChevronRight,
  ListTodo
} from 'lucide-react';
import type { Task } from '../../types';

export const TaskListContent: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('jkr_strategy_tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<Task['priority']>('medium');
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    localStorage.setItem('jkr_strategy_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newTask: Task = {
      id: `task-${Date.now()}`,
      text: newTaskText.trim(),
      completed: false,
      priority: newTaskPriority,
      createdAt: new Date().toISOString(),
    };

    setTasks([newTask, ...tasks]);
    setNewTaskText('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = 
      filter === 'all' ? true :
      filter === 'active' ? !task.completed :
      task.completed;
    return matchesSearch && matchesFilter;
  });

  const activeCount = tasks.filter(t => !t.completed).length;

  const priorityColors = {
    low: 'text-blue-400 bg-blue-500/10',
    medium: 'text-amber-400 bg-amber-500/10',
    high: 'text-primary bg-primary/10',
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-black text-text-primary uppercase tracking-tighter mb-2">Strategy Task Manager</h2>
        <p className="text-text-secondary">Orchestrating daily actions to fulfill the 2025-2030 Strategic Mandate.</p>
      </div>

      {/* Input Section */}
      <form onSubmit={addTask} className="glass-panel p-6 rounded-2xl border border-white/10 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-grow relative group">
            <ListTodo className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="Enter a new strategic task..."
              className="w-full bg-background/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-inner"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={newTaskPriority}
              onChange={(e) => setNewTaskPriority(e.target.value as Task['priority'])}
              className="bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            <button
              type="submit"
              disabled={!newTaskText.trim()}
              className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold transition-all shadow-glow-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </form>

      {/* Filters & Stats */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 bg-surface-light/30 p-1 rounded-xl border border-white/5">
          {(['all', 'active', 'completed'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                filter === f 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        
        <div className="relative group min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks..."
            className="w-full bg-surface-light/20 border border-white/5 rounded-lg pl-9 pr-4 py-1.5 text-sm text-text-primary focus:outline-none focus:border-white/20 transition-all"
          />
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-3 min-h-[400px]">
        <AnimatePresence mode='popLayout'>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={`group relative bg-surface p-4 rounded-xl border border-white/5 shadow-md flex items-center gap-4 transition-all hover:border-white/20 ${task.completed ? 'opacity-60' : ''}`}
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`shrink-0 transition-colors ${task.completed ? 'text-green-500' : 'text-text-muted hover:text-primary'}`}
                >
                  {task.completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                </button>

                <div className="flex-grow min-w-0">
                  <p className={`text-sm font-semibold text-text-primary break-words leading-tight ${task.completed ? 'line-through text-text-muted' : ''}`}>
                    {task.text}
                  </p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${priorityColors[task.priority]}`}>
                      {task.priority}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-text-muted font-bold">
                      <Clock className="w-3 h-3" />
                      {new Date(task.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-2 text-text-muted hover:text-primary opacity-0 group-hover:opacity-100 transition-all hover:bg-primary/10 rounded-lg"
                  title="Delete Task"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-text-muted mb-4 border border-white/5 border-dashed">
                <ListTodo className="w-10 h-10 opacity-20" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">No tasks found</h3>
              <p className="text-text-secondary mt-1">
                {tasks.length === 0 ? "You haven't added any strategic tasks yet." : "Adjust your search or filter settings."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Summary Footer */}
      {tasks.length > 0 && (
        <div className="flex items-center justify-between pt-6 border-t border-white/5 text-xs font-black uppercase tracking-[0.2em] text-text-muted">
          <span>{activeCount} Tasks Remaining</span>
          <span>{Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)}% Execution Rate</span>
        </div>
      )}
    </div>
  );
};
