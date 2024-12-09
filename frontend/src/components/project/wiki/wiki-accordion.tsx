import React, {useState} from "react";

const Accordion: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-200 mb-4 rounded-lg">
            <div
                className="flex justify-between items-center rounded-lg p-4 cursor-pointer bg-gray-200 transition-colors duration-300 hover:bg-gray-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-medium text-gray-800">{title}</h3>
                <span className="text-lg text-gray-500">{isOpen ? '▲' : '▼'}</span>
            </div>

            {/* Accordion Content */}
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
                style={{
                    transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out, visibility 0.3s ease-out',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Accordion;
