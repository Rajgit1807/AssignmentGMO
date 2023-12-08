import React, { useState } from 'react';

interface DepartmentData {
  department: string;
  sub_departments: string[];
}

interface DepartmentListProps {
  data: DepartmentData[];
}

const DeptList: React.FC<DepartmentListProps> = ({ data }) => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);

  const handleToggle = (department: string) => {
    if (expandedDepartments.includes(department)) {
      setExpandedDepartments(expandedDepartments.filter((dep) => dep !== department));
    } else {
      setExpandedDepartments([...expandedDepartments, department]);
    }
  };

  const handleToggleSubDepartment = (subDepartment: string) => {
    if (selectedDepartments.includes(subDepartment)) {
      setSelectedDepartments(selectedDepartments.filter((dep) => dep !== subDepartment));
    } else {
      setSelectedDepartments([...selectedDepartments, subDepartment]);
    }
  };

  const isDepartmentSelected = (department: string) => selectedDepartments.includes(department);

  const isAllSubDepartmentsSelected = (subDepartments: string[]) =>
    subDepartments.every((subDep) => selectedDepartments.includes(subDep));

  const handleSelectAllSubDepartments = (department: string, subDepartments: string[]) => {
    if (isAllSubDepartmentsSelected(subDepartments)) {
      setSelectedDepartments(selectedDepartments.filter((dep) => dep !== department));
    } else {
      setSelectedDepartments([...selectedDepartments, department, ...subDepartments]);
    }
  };

  return (
    <div>
      {data.map(({ department, sub_departments }) => (
        <div key={department}>
          <label>
            <button onClick={() => handleToggle(department)}>
              {expandedDepartments.includes(department) ? '-' : '+'}
            </button>
            <input
              type="checkbox"
              checked={isDepartmentSelected(department)}
              onChange={() => handleSelectAllSubDepartments(department, sub_departments)}
            />
            {department}
          </label>
          {expandedDepartments.includes(department) && (
            <div>
              {sub_departments.map((subDepartment) => (
                <div key={subDepartment}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedDepartments.includes(subDepartment)}
                      onChange={() => handleToggleSubDepartment(subDepartment)}
                    />
                    {subDepartment}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DeptList;
