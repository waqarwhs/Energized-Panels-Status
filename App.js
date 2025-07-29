import React, { useState } from 'react';
import './App.css';

const panelsData = [
  {
    panel: "EMDB-S04-A-2",
    sections: [
      { code: "Q2", label: "INCOMER 2 (GEN-S04-A-2)", status: false },
      { code: "F14", label: "LDP (JCI)", status: false },
      { code: "F13", label: "EDB-S04-A-CS", status: false },
      { code: "F9", label: "MCC-C-5 (JCI)", status: false },
      { code: "F6", label: "EDB-S04-A-HM", status: false },
      { code: "F3", label: "SPARE", status: false },
      { code: "F2", label: "SPARE", status: false },
    ],
  },
];

function App() {
  const [panels, setPanels] = useState(panelsData);

  const toggleStatus = (panelIndex, sectionIndex) => {
    const newPanels = [...panels];
    newPanels[panelIndex].sections[sectionIndex].status =
      !newPanels[panelIndex].sections[sectionIndex].status;
    setPanels(newPanels);
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>🔌 Energized Status Tracker</h1>
      {panels.map((panel, panelIndex) => (
        <div
          key={panel.panel}
          style={{
            border: '1px solid #ccc',
            padding: 10,
            marginBottom: 20,
            borderRadius: 6,
            background: '#f9f9f9',
          }}
        >
          <h2>{panel.panel}</h2>
          {panel.sections.map((section, sectionIndex) => (
            <div
              key={section.code}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '6px 0',
              }}
            >
              <span>
                {section.code} - {section.label}
              </span>
              <button onClick={() => toggleStatus(panelIndex, sectionIndex)}>
                {section.status ? '✅ Energized' : '❌ Unenergized'}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
