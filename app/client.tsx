/// <reference types="vinxi/types/client" />
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/start";
import { scan } from "react-scan";

import { createRouter } from "./router";

const router = createRouter();
scan({
  enabled: true,
});

hydrateRoot(document, <StartClient router={router} />);
