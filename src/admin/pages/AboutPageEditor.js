import React, { useState } from 'react';
import { Save, Plus, Trash, Edit, CheckCircle2, X, Image } from 'lucide-react';

const AboutPageEditor = () => {
  const [mission, setMission] = useState({
    title: "Our Mission",
    content: "To provide a nurturing educational environment that fosters academic excellence, character development, and lifelong learning skills."
  });
  
  const [vision, setVision] = useState({
    title: "Our Vision",
    content: "To be a leading educational institution that empowers students to become innovative thinkers, responsible citizens, and future leaders."
  });
  
  const [coreValues, setCoreValues] = useState([
    {
      id: 1,
      title: "Integrity",
      description: "We uphold honesty, transparency, and ethical behavior in all our actions and decisions.",
      color: "green"
    },
    {
      id: 2,
      title: "Excellence",
      description: "We strive for the highest standards in academics, character, and service to the community.",
      color: "green"
    },
    {
      id: 3,
      title: "Respect",
      description: "We value diversity and treat all individuals with dignity, kindness, and consideration.",
      color: "green"
    }
  ]);
  
  const [leaders, setLeaders] = useState([
    {
      id: 1,
      name: "Dr. Oluwaseun Adeyemi",
      role: "Principal",
      description: "With over 20 years of experience in education, Dr. Adeyemi leads our school with vision and dedication to excellence.",
      image: ""
    },
    {
      id: 2,
      name: "Mrs. Folake Ogunleye",
      role: "Vice Principal, Academics",
      description: "Mrs. Ogunleye oversees our academic programs, ensuring high standards and innovative teaching methods.",
      image: ""
    }
  ]);
  
  const [history, setHistory] = useState({
    title: "Our History",
    content: "Founded in 2005, NS Secondary School has grown from a small institution with just 50 students to a comprehensive educational center serving over 500 students. Our journey has been marked by continuous improvement, innovation, and a commitment to excellence."
  });
  
  const [editingValue, setEditingValue] = useState(null);
  const [editingLeader, setEditingLeader] = useState(null);
  const [newValue, setNewValue] = useState({ title: "", description: "", color: "green" });
  const [newLeader, setNewLeader] = useState({ name: "", role: "", description: "", image: "" });
  const [saved, setSaved] = useState(false);
  
  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };
  
  const addCoreValue = () => {
    if (newValue.title && newValue.description) {
      setCoreValues([...coreValues, { ...newValue, id: Date.now() }]);
      setNewValue({ title: "", description: "", color: "green" });
    }
  };
  
  const updateCoreValue = () => {
    if (editingValue && editingValue.title && editingValue.description) {
      setCoreValues(coreValues.map(value => 
        value.id === editingValue.id ? editingValue : value
      ));
      setEditingValue(null);
    }
  };
  
  const deleteCoreValue = (id) => {
    setCoreValues(coreValues.filter(value => value.id !== id));
  };
  
  const addLeader = () => {
    if (newLeader.name && newLeader.role && newLeader.description) {
      setLeaders([...leaders, { ...newLeader, id: Date.now() }]);
      setNewLeader({ name: "", role: "", description: "", image: "" });
    }
  };
  
  const updateLeader = () => {
    if (editingLeader && editingLeader.name && editingLeader.role) {
      setLeaders(leaders.map(leader => 
        leader.id === editingLeader.id ? editingLeader : leader
      ));
      setEditingLeader(null);
    }
  };
  
  const deleteLeader = (id) => {
    setLeaders(leaders.filter(leader => leader.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              About Page Editor
            </h1>
            <p className="text-slate-500 mt-1">Manage your school's story and values</p>
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
                Save Changes
              </>
            )}
          </button>
        </div>
        
        {/* Mission & Vision */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800">Mission & Vision</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Mission Title</label>
                <input 
                  type="text" 
                  value={mission.title}
                  onChange={(e) => setMission({...mission, title: e.target.value})}
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Mission Content</label>
                <textarea 
                  value={mission.content}
                  onChange={(e) => setMission({...mission, content: e.target.value})}
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-200 resize-none"
                  rows="4"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Vision Title</label>
                <input 
                  type="text" 
                  value={vision.title}
                  onChange={(e) => setVision({...vision, title: e.target.value})}
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Vision Content</label>
                <textarea 
                  value={vision.content}
                  onChange={(e) => setVision({...vision, content: e.target.value})}
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-200 resize-none"
                  rows="4"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800">Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {coreValues.map((value) => (
              <div 
                key={value.id} 
                className="group relative bg-gradient-to-br from-white to-green-50/30 p-6 rounded-xl border-2 border-slate-100 hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button 
                    onClick={() => setEditingValue(value)}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md"
                  >
                    <Edit size={14} />
                  </button>
                  <button 
                    onClick={() => deleteCoreValue(value.id)}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-md"
                  >
                    <Trash size={14} />
                  </button>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
          
          {editingValue ? (
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800">Edit Core Value</h3>
                <button 
                  onClick={() => setEditingValue(null)}
                  className="p-1 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Title</label>
                  <input 
                    type="text" 
                    value={editingValue.title}
                    onChange={(e) => setEditingValue({...editingValue, title: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                  <textarea 
                    value={editingValue.description}
                    onChange={(e) => setEditingValue({...editingValue, description: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                    rows="3"
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <button 
                    onClick={() => setEditingValue(null)}
                    className="px-5 py-2.5 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={updateCoreValue}
                    className="px-5 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 font-medium shadow-lg shadow-blue-200 transition-all"
                  >
                    Update Value
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-dashed border-green-300 hover:border-green-400 transition-colors">
              <h3 className="font-bold text-slate-800 mb-4">Add New Core Value</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Title</label>
                  <input 
                    type="text" 
                    value={newValue.title}
                    onChange={(e) => setNewValue({...newValue, title: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                    placeholder="e.g., Innovation"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                  <textarea 
                    value={newValue.description}
                    onChange={(e) => setNewValue({...newValue, description: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all resize-none"
                    placeholder="Describe this core value..."
                    rows="3"
                  />
                </div>
                <button 
                  onClick={addCoreValue}
                  className="flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-xl hover:bg-green-600 font-medium shadow-lg shadow-green-200 transition-all"
                >
                  <Plus size={18} />
                  Add Value
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Leadership */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800">School Leadership</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {leaders.map((leader) => (
              <div 
                key={leader.id} 
                className="group relative bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl border-2 border-slate-100 hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button 
                    onClick={() => setEditingLeader(leader)}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md"
                  >
                    <Edit size={14} />
                  </button>
                  <button 
                    onClick={() => deleteLeader(leader.id)}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-md"
                  >
                    <Trash size={14} />
                  </button>
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                    {leader.image ? (
                      <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                    ) : (
                      <Image className="text-green-600" size={32} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-800">{leader.name}</h3>
                    <p className="text-green-600 font-semibold text-sm mb-2">{leader.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{leader.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {editingLeader ? (
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800">Edit Leader</h3>
                <button 
                  onClick={() => setEditingLeader(null)}
                  className="p-1 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      value={editingLeader.name}
                      onChange={(e) => setEditingLeader({...editingLeader, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Role</label>
                    <input 
                      type="text" 
                      value={editingLeader.role}
                      onChange={(e) => setEditingLeader({...editingLeader, role: e.target.value})}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                  <textarea 
                    value={editingLeader.description}
                    onChange={(e) => setEditingLeader({...editingLeader, description: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                    rows="3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Image URL</label>
                  <input 
                    type="text" 
                    value={editingLeader.image}
                    onChange={(e) => setEditingLeader({...editingLeader, image: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <button 
                    onClick={() => setEditingLeader(null)}
                    className="px-5 py-2.5 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={updateLeader}
                    className="px-5 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 font-medium shadow-lg shadow-blue-200 transition-all"
                  >
                    Update Leader
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-dashed border-green-300 hover:border-green-400 transition-colors">
              <h3 className="font-bold text-slate-800 mb-4">Add New Leader</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      value={newLeader.name}
                      onChange={(e) => setNewLeader({...newLeader, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Role</label>
                    <input 
                      type="text" 
                      value={newLeader.role}
                      onChange={(e) => setNewLeader({...newLeader, role: e.target.value})}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                      placeholder="e.g., Department Head"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                  <textarea 
                    value={newLeader.description}
                    onChange={(e) => setNewLeader({...newLeader, description: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all resize-none"
                    placeholder="Brief bio..."
                    rows="3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Image URL</label>
                  <input 
                    type="text" 
                    value={newLeader.image}
                    onChange={(e) => setNewLeader({...newLeader, image: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <button 
                  onClick={addLeader}
                  className="flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-xl hover:bg-green-600 font-medium shadow-lg shadow-green-200 transition-all"
                >
                  <Plus size={18} />
                  Add Leader
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* History */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800">School History</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">History Title</label>
              <input 
                type="text" 
                value={history.title}
                onChange={(e) => setHistory({...history, title: e.target.value})}
                className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">History Content</label>
              <textarea 
                value={history.content}
                onChange={(e) => setHistory({...history, content: e.target.value})}
                className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-200 resize-none"
                rows="5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageEditor;