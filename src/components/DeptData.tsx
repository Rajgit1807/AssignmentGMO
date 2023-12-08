
import DeptList from './DeptList'; 

const DeptData = () => {
  const departmentData = [
    {
      department: 'customer_service',
      sub_departments: ['support', 'customer_success'],
    },
    {
      department: 'design',
      sub_departments: ['graphic_design', 'product_design', 'web_design'],
    },
  ];

  return <DeptList data={departmentData} />;
};

export default DeptData;
