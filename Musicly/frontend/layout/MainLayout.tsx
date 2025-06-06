import { ResizablePanelGroup, ResizablePanel } from "@/components/ui/resizable";
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    const isMobile =false;
    return <div className="h-screen bg-black text-white flex flex-col">
    
    <ResizablePanelGroup direction="horizontal" className="flex-1 flex h-full overflow-hidden p-2">

        /* left sidebar */
        <ResizablePanel defaultSize={20} minSize={isMobile ?0: 10} maxSize={30}>
            left sidebar
        </ResizablePanel>

        /* Main Content */
        <ResizablePanel defaultSize={isMobile ? 80 : 60}>
            <Outlet />
        </ResizablePanel>

        /* right sidebar */
        <ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0}>
            right sidebar
        </ResizablePanel>
    </ResizablePanelGroup>

    </div>;
} ;
export default MainLayout