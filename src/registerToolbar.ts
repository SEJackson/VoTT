import { ToolbarItemFactory } from "./providers/toolbar/toolbarItemFactory";
import { SaveProject } from "./react/components/toolbar/saveProject";
import { ExportProject } from "./react/components/toolbar/exportProject";
import { Select } from "./react/components/toolbar/select";
import { DrawRectangle } from "./react/components/toolbar/drawRectangle";
import { DrawPolygon } from "./react/components/toolbar/drawPolygon";
import { ToolbarItemType } from "./react/components/toolbar/toolbarItem";
import { NextAsset } from "./react/components/toolbar/nextAsset";
import { PreviousAsset } from "./react/components/toolbar/previousAsset";

/**
 * Registers items for toolbar
 */
export default function registerToolbar() {
    ToolbarItemFactory.register(Select, {
        name: "selectCanvas",
        tooltip: "Select (V)",
        icon: "fa-mouse-pointer",
        group: "canvas",
        type: ToolbarItemType.State,
        accelerators: ["v", "V"],
    });

    ToolbarItemFactory.register(DrawRectangle, {
        name: "drawRectangle",
        tooltip: "Draw Rectangle (R)",
        icon: "fa-vector-square",
        group: "canvas",
        type: ToolbarItemType.State,
        accelerators: ["r", "R"],
    });

    ToolbarItemFactory.register(DrawPolygon, {
        name: "drawPolygon",
        tooltip: "Draw Polygon (P)",
        icon: "fa-draw-polygon",
        group: "canvas",
        type: ToolbarItemType.State,
        accelerators: ["p", "P"],
    });

    ToolbarItemFactory.register(PreviousAsset, {
        name: "navigatePreviousAsset",
        tooltip: "Previous Asset (W)",
        icon: "fas fa-arrow-circle-up",
        group: "navigation",
        type: ToolbarItemType.Action,
        accelerators: ["ArrowUp", "w", "W"],
    });

    ToolbarItemFactory.register(NextAsset, {
        name: "navigateNextAsset",
        tooltip: "Next Asset (S)",
        icon: "fas fa-arrow-circle-down",
        group: "navigation",
        type: ToolbarItemType.Action,
        accelerators: ["ArrowDown", "s", "S"],
    });

    ToolbarItemFactory.register(SaveProject, {
        name: "saveProject",
        tooltip: "Save Project (Ctrl+S)",
        icon: "fa-save",
        group: "project",
        type: ToolbarItemType.Action,
        accelerators: ["Ctrl+s", "Ctrl+S"],
    });

    ToolbarItemFactory.register(ExportProject, {
        name: "exportProject",
        tooltip: "Export Project (Ctrl+E)",
        icon: "fa-external-link-square-alt",
        group: "project",
        type: ToolbarItemType.Action,
        accelerators: ["Ctrl+e", "Ctrl+E"],
    });
}
