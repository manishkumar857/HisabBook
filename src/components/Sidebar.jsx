import { LayoutDashboard } from "lucide-react";
function Sidebar(){
    return(

        <div>
            <h1>HisabBook</h1>

            <p>smart expense manager</p>

            <nav>
                <div>
                    <LayoutDashboard/>
                    <span>Dashboard</span>
                </div>
            </nav>
        </div>

    );
}

export default Sidebar;