import { Navbar } from "./_components/navbar";


const DashboardLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div className="h-full">
            <Navbar />
            {children}
        </div>
    );
};

export default DashboardLayout;