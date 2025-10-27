import React, { useState } from 'react';
import { Plus, Trash2, Edit2, X, Save, FileText, DollarSign, Award, ClipboardList, Image, Check } from 'lucide-react';

const AdmissionsEditor = () => {
  const [processSteps, setProcessSteps] = useState([
    { id: 1, title: 'Application Submission', description: 'Complete and submit the online application form with all required documents.' },
    { id: 2, title: 'Entrance Assessment', description: 'Students take an entrance assessment to determine academic readiness.' },
    { id: 3, title: 'Interview', description: 'Parents and students attend an interview with school administrators.' },
    { id: 4, title: 'Decision & Enrollment', description: 'Acceptance decisions are communicated, followed by enrollment and fee payment.' }
  ]);

  const [requirements, setRequirements] = useState([
    { id: 1, title: 'Birth Certificate', description: 'Original and photocopy of birth certificate' },
    { id: 2, title: 'Academic Records', description: 'Previous school records and transcripts for the last two years' },
    { id: 3, title: 'Medical Records', description: 'Immunization records and health assessment form' },
    { id: 4, title: 'Passport Photos', description: 'Four recent passport-sized photographs' }
  ]);

  const [fees, setFees] = useState([
    { id: 1, title: 'Application Fee', amount: '$50', description: 'Non-refundable fee due at time of application' },
    { id: 2, title: 'Registration Fee', amount: '$250', description: 'One-time fee for new students' },
    { id: 3, title: 'Tuition Fee', amount: '$5,000 - $8,000', description: 'Annual tuition varies by grade level' },
    { id: 4, title: 'Technology Fee', amount: '$200', description: 'Annual fee for technology resources' }
  ]);

  const [scholarships, setScholarships] = useState([
    { id: 1, title: 'Academic Excellence', description: 'For students with outstanding academic achievements', amount: 'Up to 50% tuition reduction' },
    { id: 2, title: 'Sports Scholarship', description: 'For students with exceptional athletic abilities', amount: 'Up to 30% tuition reduction' },
    { id: 3, title: 'Arts Scholarship', description: 'For students with remarkable talents in visual or performing arts', amount: 'Up to 25% tuition reduction' }
  ]);

  const [newStep, setNewStep] = useState({ title: '', description: '' });
  const [newRequirement, setNewRequirement] = useState({ title: '', description: '' });
  const [newFee, setNewFee] = useState({ title: '', amount: '', description: '' });
  const [newScholarship, setNewScholarship] = useState({ title: '', description: '', amount: '' });
  const [editingItem, setEditingItem] = useState({ type: null, item: null });
  const [activeSection, setActiveSection] = useState('process');

  const handleAdd = (type) => {
    switch(type) {
      case 'process':
        if (newStep.title && newStep.description) {
          setProcessSteps([...processSteps, { ...newStep, id: Date.now() }]);
          setNewStep({ title: '', description: '' });
        }
        break;
      case 'requirement':
        if (newRequirement.title && newRequirement.description) {
          setRequirements([...requirements, { ...newRequirement, id: Date.now() }]);
          setNewRequirement({ title: '', description: '' });
        }
        break;
      case 'fee':
        if (newFee.title && newFee.amount) {
          setFees([...fees, { ...newFee, id: Date.now() }]);
          setNewFee({ title: '', amount: '', description: '' });
        }
        break;
      case 'scholarship':
        if (newScholarship.title && newScholarship.description) {
          setScholarships([...scholarships, { ...newScholarship, id: Date.now() }]);
          setNewScholarship({ title: '', description: '', amount: '' });
        }
        break;
      default:
        break;
    }
  };

  const handleUpdate = () => {
    if (!editingItem.item) return;
    
    switch(editingItem.type) {
      case 'process':
        setProcessSteps(processSteps.map(item => 
          item.id === editingItem.item.id ? editingItem.item : item
        ));
        break;
      case 'requirement':
        setRequirements(requirements.map(item => 
          item.id === editingItem.item.id ? editingItem.item : item
        ));
        break;
      case 'fee':
        setFees(fees.map(item => 
          item.id === editingItem.item.id ? editingItem.item : item
        ));
        break;
      case 'scholarship':
        setScholarships(scholarships.map(item => 
          item.id === editingItem.item.id ? editingItem.item : item
        ));
        break;
      default:
        break;
    }
    
    setEditingItem({ type: null, item: null });
  };

  const handleDelete = (type, id) => {
    switch(type) {
      case 'process':
        setProcessSteps(processSteps.filter(item => item.id !== id));
        break;
      case 'requirement':
        setRequirements(requirements.filter(item => item.id !== id));
        break;
      case 'fee':
        setFees(fees.filter(item => item.id !== id));
        break;
      case 'scholarship':
        setScholarships(scholarships.filter(item => item.id !== id));
        break;
      default:
        break;
    }
  };

  const handleEdit = (type, item) => {
    setEditingItem({ type, item });
  };

  const sections = [
    { id: 'banner', label: 'Banner', icon: Image },
    { id: 'process', label: 'Process', icon: ClipboardList },
    { id: 'requirements', label: 'Requirements', icon: FileText },
    { id: 'fees', label: 'Fees', icon: DollarSign },
    { id: 'scholarships', label: 'Scholarships', icon: Award }
  ];

  const renderItems = (type, items) => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={item.id} className="group relative bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white text-sm font-semibold">
                    {index + 1}
                  </span>
                  <h4 className="font-semibold text-gray-900 truncate">{item.title}</h4>
                </div>
                {item.amount && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-2">
                    <DollarSign size={14} />
                    <span>{item.amount}</span>
                  </div>
                )}
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => handleEdit(type, item)}
                  className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                >
                  <Edit2 size={16} />
                </button>
                <button 
                  onClick={() => handleDelete(type, item.id)}
                  className="p-2 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderAddForm = (type) => {
    const forms = {
      process: {
        title: 'Add Process Step',
        fields: (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Step Title</label>
              <input
                type="text"
                value={newStep.title}
                onChange={(e) => setNewStep({...newStep, title: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="e.g., Application Submission"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={newStep.description}
                onChange={(e) => setNewStep({...newStep, description: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                rows={3}
                placeholder="Describe this step in the admission process"
              />
            </div>
          </>
        ),
        action: () => handleAdd('process')
      },
      requirement: {
        title: 'Add Requirement',
        fields: (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Requirement Title</label>
              <input
                type="text"
                value={newRequirement.title}
                onChange={(e) => setNewRequirement({...newRequirement, title: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="e.g., Birth Certificate"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={newRequirement.description}
                onChange={(e) => setNewRequirement({...newRequirement, description: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                rows={3}
                placeholder="Provide details about this requirement"
              />
            </div>
          </>
        ),
        action: () => handleAdd('requirement')
      },
      fee: {
        title: 'Add Fee',
        fields: (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fee Title</label>
                <input
                  type="text"
                  value={newFee.title}
                  onChange={(e) => setNewFee({...newFee, title: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="e.g., Application Fee"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                <input
                  type="text"
                  value={newFee.amount}
                  onChange={(e) => setNewFee({...newFee, amount: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="e.g., $50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={newFee.description}
                onChange={(e) => setNewFee({...newFee, description: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                rows={2}
                placeholder="Provide additional information about this fee"
              />
            </div>
          </>
        ),
        action: () => handleAdd('fee')
      },
      scholarship: {
        title: 'Add Scholarship',
        fields: (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Scholarship Title</label>
                <input
                  type="text"
                  value={newScholarship.title}
                  onChange={(e) => setNewScholarship({...newScholarship, title: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="e.g., Academic Excellence"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Discount/Amount</label>
                <input
                  type="text"
                  value={newScholarship.amount}
                  onChange={(e) => setNewScholarship({...newScholarship, amount: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="e.g., Up to 50%"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={newScholarship.description}
                onChange={(e) => setNewScholarship({...newScholarship, description: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                rows={2}
                placeholder="Describe eligibility criteria and benefits"
              />
            </div>
          </>
        ),
        action: () => handleAdd('scholarship')
      }
    };

    const form = forms[type];
    if (!form) return null;

    return (
      <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
            <Plus size={18} className="text-emerald-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{form.title}</h3>
        </div>
        <div className="space-y-4 mb-5">
          {form.fields}
        </div>
        <button
          onClick={form.action}
          className="w-full px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium shadow-lg shadow-emerald-200 hover:shadow-xl transition-all"
        >
          Add {type === 'process' ? 'Step' : type === 'requirement' ? 'Requirement' : type === 'fee' ? 'Fee' : 'Scholarship'}
        </button>
      </div>
    );
  };

  const renderEditForm = () => {
    if (!editingItem.item) return null;
    
    const { type, item } = editingItem;
    
    const handleChange = (field, value) => {
      setEditingItem({
        ...editingItem,
        item: {
          ...editingItem.item,
          [field]: value
        }
      });
    };
    
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4 flex items-center justify-between rounded-t-2xl">
            <h3 className="text-xl font-semibold text-white">
              Edit {type === 'process' ? 'Process Step' : 
                   type === 'requirement' ? 'Requirement' : 
                   type === 'fee' ? 'Fee' : 'Scholarship'}
            </h3>
            <button
              onClick={() => setEditingItem({ type: null, item: null })}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
          </div>
          
          <div className="p-6 space-y-5">
            <div className={type === 'process' || type === 'requirement' ? '' : 'grid grid-cols-2 gap-4'}>
              <div className={type === 'process' || type === 'requirement' ? 'mb-4' : ''}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
              {(type === 'fee' || type === 'scholarship') && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {type === 'fee' ? 'Amount' : 'Discount/Amount'}
                  </label>
                  <input
                    type="text"
                    value={item.amount}
                    onChange={(e) => handleChange('amount', e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={item.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                rows={4}
              />
            </div>
          </div>
          
          <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 rounded-b-2xl border-t border-gray-100">
            <button
              onClick={() => setEditingItem({ type: null, item: null })}
              className="px-6 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium shadow-lg shadow-emerald-200 hover:shadow-xl transition-all"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Admissions Editor</h1>
          <p className="text-gray-500">Manage your school's admission process, requirements, fees, and scholarships</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 mb-8">
          <nav className="flex gap-2 overflow-x-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-200'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={18} />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {activeSection === 'banner' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Image size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Banner Image</h2>
                <p className="text-sm text-gray-500">Upload a compelling banner image for the admissions page</p>
              </div>
            </div>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center hover:border-emerald-300 transition-colors">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image size={32} className="text-gray-400" />
              </div>
              <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-400">SVG, PNG, JPG or GIF (max. 2MB)</p>
            </div>
          </div>
        )}

        {activeSection === 'process' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <ClipboardList size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Admission Process</h2>
                  <p className="text-sm text-gray-500">Define the steps in your admission process</p>
                </div>
              </div>
              {renderItems('process', processSteps)}
            </div>
            {renderAddForm('process')}
          </div>
        )}

        {activeSection === 'requirements' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <FileText size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Admission Requirements</h2>
                  <p className="text-sm text-gray-500">List all required documents and materials</p>
                </div>
              </div>
              {renderItems('requirement', requirements)}
            </div>
            {renderAddForm('requirement')}
          </div>
        )}

        {activeSection === 'fees' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <DollarSign size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Tuition & Fees</h2>
                  <p className="text-sm text-gray-500">Manage all fee structures and payment information</p>
                </div>
              </div>
              {renderItems('fee', fees)}
            </div>
            {renderAddForm('fee')}
          </div>
        )}

        {activeSection === 'scholarships' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Scholarships</h2>
                  <p className="text-sm text-gray-500">Define available scholarships and financial aid options</p>
                </div>
              </div>
              {renderItems('scholarship', scholarships)}
            </div>
            {renderAddForm('scholarship')}
          </div>
        )}

        <div className="fixed bottom-8 right-8 z-40">
          <button className="group flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-2xl font-medium shadow-2xl shadow-emerald-300 hover:shadow-emerald-400 transition-all duration-300 hover:-translate-y-1">
            <Save size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>Save All Changes</span>
          </button>
        </div>
      </div>

      {renderEditForm()}
    </div>
  );
};

export default AdmissionsEditor;