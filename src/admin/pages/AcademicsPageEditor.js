import React, { useState } from 'react';
import { Save, Plus, Trash, Edit, X, CheckCircle2, GraduationCap, BookOpen, Calculator, FlaskConical, Languages } from 'lucide-react';

const AcademicsPageEditor = () => {
  const [programs, setPrograms] = useState([
    { id: 1, title: 'Elementary School', description: 'Our elementary program focuses on building strong foundations in literacy, numeracy, and critical thinking.', ageRange: '5-11 years' },
    { id: 2, title: 'Middle School', description: 'The middle school program develops independent learning skills and deeper subject knowledge.', ageRange: '11-14 years' },
    { id: 3, title: 'High School', description: 'Our high school program prepares students for university with rigorous academics and leadership opportunities.', ageRange: '14-18 years' }
  ]);

  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Mathematics', description: 'Our mathematics curriculum develops problem-solving skills and mathematical thinking.', icon: 'calculator' },
    { id: 2, name: 'Science', description: 'Students engage in hands-on experiments and scientific inquiry across biology, chemistry, and physics.', icon: 'flask' },
    { id: 3, name: 'Language Arts', description: 'Our language arts program builds strong reading, writing, and communication skills.', icon: 'book' }
  ]);

  const [newProgram, setNewProgram] = useState({ title: '', description: '', ageRange: '' });
  const [newSubject, setNewSubject] = useState({ name: '', description: '', icon: 'book' });
  const [editingProgram, setEditingProgram] = useState(null);
  const [editingSubject, setEditingSubject] = useState(null);
  const [saved, setSaved] = useState(false);

  const iconMap = {
    calculator: Calculator,
    flask: FlaskConical,
    book: BookOpen,
    languages: Languages,
    graduation: GraduationCap
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleAddProgram = () => {
    if (newProgram.title && newProgram.description) {
      setPrograms([...programs, { ...newProgram, id: Date.now() }]);
      setNewProgram({ title: '', description: '', ageRange: '' });
    }
  };

  const handleUpdateProgram = () => {
    if (editingProgram) {
      setPrograms(programs.map(p => p.id === editingProgram.id ? editingProgram : p));
      setEditingProgram(null);
    }
  };

  const handleDeleteProgram = (id) => {
    setPrograms(programs.filter(p => p.id !== id));
  };

  const handleAddSubject = () => {
    if (newSubject.name && newSubject.description) {
      setSubjects([...subjects, { ...newSubject, id: Date.now() }]);
      setNewSubject({ name: '', description: '', icon: 'book' });
    }
  };

  const handleUpdateSubject = () => {
    if (editingSubject) {
      setSubjects(subjects.map(s => s.id === editingSubject.id ? editingSubject : s));
      setEditingSubject(null);
    }
  };

  const handleDeleteSubject = (id) => {
    setSubjects(subjects.filter(s => s.id !== id));
  };

  const getIcon = (iconName) => {
    const Icon = iconMap[iconName] || BookOpen;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Academics Page Editor
            </h1>
            <p className="text-slate-500 mt-1">Manage programs, subjects, and curriculum</p>
          </div>
          <button 
            onClick={handleSave}
            className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-medium shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:-translate-y-0.5 transition-all duration-200"
          >
            {saved ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Saved!
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                Save All Changes
              </>
            )}
          </button>
        </div>

        {/* Programs Section */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800">Academic Programs</h2>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
            {programs.map((program) => (
              <div 
                key={program.id}
                className="group relative bg-gradient-to-br from-white to-green-50/30 p-6 rounded-xl border-2 border-slate-100 hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button 
                    onClick={() => setEditingProgram(program)}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md"
                  >
                    <Edit size={14} />
                  </button>
                  <button 
                    onClick={() => handleDeleteProgram(program.id)}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-md"
                  >
                    <Trash size={14} />
                  </button>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <GraduationCap className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-800">{program.title}</h3>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mt-1">
                      {program.ageRange}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>

          {/* Edit Program Form */}
          {editingProgram ? (
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800">Edit Program</h3>
                <button 
                  onClick={() => setEditingProgram(null)}
                  className="p-1 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Program Title</label>
                  <input
                    type="text"
                    value={editingProgram.title}
                    onChange={(e) => setEditingProgram({...editingProgram, title: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Age Range</label>
                  <input
                    type="text"
                    value={editingProgram.ageRange}
                    onChange={(e) => setEditingProgram({...editingProgram, ageRange: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="e.g., 5-11 years"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                  <textarea
                    value={editingProgram.description}
                    onChange={(e) => setEditingProgram({...editingProgram, description: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                    rows="3"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setEditingProgram(null)}
                  className="px-5 py-2.5 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateProgram}
                  className="px-5 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 font-medium shadow-lg shadow-blue-200 transition-all"
                >
                  Update Program
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-dashed border-green-300 hover:border-green-400 transition-colors">
              <h3 className="font-bold text-slate-800 mb-4">Add New Program</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Program Title</label>
                  <input
                    type="text"
                    value={newProgram.title}
                    onChange={(e) => setNewProgram({...newProgram, title: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                    placeholder="e.g., Pre-School"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Age Range</label>
                  <input
                    type="text"
                    value={newProgram.ageRange}
                    onChange={(e) => setNewProgram({...newProgram, ageRange: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                    placeholder="e.g., 3-5 years"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                  <textarea
                    value={newProgram.description}
                    onChange={(e) => setNewProgram({...newProgram, description: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all resize-none"
                    placeholder="Describe the program..."
                    rows="3"
                  />
                </div>
              </div>
              <button
                onClick={handleAddProgram}
                className="flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-xl hover:bg-green-600 font-medium shadow-lg shadow-green-200 transition-all"
              >
                <Plus size={18} />
                Add Program
              </button>
            </div>
          )}
        </div>

        {/* Subjects Section */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800">Academic Subjects</h2>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {subjects.map((subject) => (
              <div 
                key={subject.id}
                className="group relative bg-gradient-to-br from-white to-blue-50/30 p-6 rounded-xl border-2 border-slate-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button 
                    onClick={() => setEditingSubject(subject)}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md"
                  >
                    <Edit size={14} />
                  </button>
                  <button 
                    onClick={() => handleDeleteSubject(subject.id)}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-md"
                  >
                    <Trash size={14} />
                  </button>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md text-white">
                    {getIcon(subject.icon)}
                  </div>
                  <h3 className="font-bold text-lg text-slate-800">{subject.name}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{subject.description}</p>
              </div>
            ))}
          </div>

          {/* Edit Subject Form */}
          {editingSubject ? (
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800">Edit Subject</h3>
                <button 
                  onClick={() => setEditingSubject(null)}
                  className="p-1 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject Name</label>
                  <input
                    type="text"
                    value={editingSubject.name}
                    onChange={(e) => setEditingSubject({...editingSubject, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Icon</label>
                  <select
                    value={editingSubject.icon}
                    onChange={(e) => setEditingSubject({...editingSubject, icon: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="book">Book</option>
                    <option value="calculator">Calculator</option>
                    <option value="flask">Flask</option>
                    <option value="languages">Languages</option>
                    <option value="graduation">Graduation</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                  <textarea
                    value={editingSubject.description}
                    onChange={(e) => setEditingSubject({...editingSubject, description: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                    rows="3"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setEditingSubject(null)}
                  className="px-5 py-2.5 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateSubject}
                  className="px-5 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 font-medium shadow-lg shadow-blue-200 transition-all"
                >
                  Update Subject
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-dashed border-green-300 hover:border-green-400 transition-colors">
              <h3 className="font-bold text-slate-800 mb-4">Add New Subject</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject Name</label>
                  <input
                    type="text"
                    value={newSubject.name}
                    onChange={(e) => setNewSubject({...newSubject, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                    placeholder="e.g., History"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Icon</label>
                  <select
                    value={newSubject.icon}
                    onChange={(e) => setNewSubject({...newSubject, icon: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                  >
                    <option value="book">Book</option>
                    <option value="calculator">Calculator</option>
                    <option value="flask">Flask</option>
                    <option value="languages">Languages</option>
                    <option value="graduation">Graduation</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                  <textarea
                    value={newSubject.description}
                    onChange={(e) => setNewSubject({...newSubject, description: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all resize-none"
                    placeholder="Describe the subject..."
                    rows="3"
                  />
                </div>
              </div>
              <button
                onClick={handleAddSubject}
                className="flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-xl hover:bg-green-600 font-medium shadow-lg shadow-green-200 transition-all"
              >
                <Plus size={18} />
                Add Subject
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicsPageEditor;