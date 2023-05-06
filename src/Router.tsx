import { createHashRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./routes/NotFound";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                
            }
        ],
        errorElement: <NotFound />,    
    }
]);


export default router;