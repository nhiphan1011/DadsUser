
import { Navigate } from "react-router-dom";

import { PublicLayout } from "components/layouts";
import { Assistant } from "pages/assistant";

const AssistantRoutes = (assistant: boolean) => {
    return [
        {
            path: "/assistants",
            element: assistant ? <Navigate to={"/"} /> : <PublicLayout />,
            children: [
                {
                    index: true,
                    element: <Assistant />,
                },
            ],
        },
    ];
};

export default AssistantRoutes;
