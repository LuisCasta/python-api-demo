export let permissions = [
  // --- Admin ---
  {
    id: 1,
    roleId: 1,
    moduleId: 1,
    actions: ["read", "create", "update", "delete"],
    visibleFields: ["name"],
    editableFields: [],
    filter: {}
  },
  {
    id: 2,
    roleId: 1,
    moduleId: 2,
    actions: ["read", "create", "update", "delete"]
  },
  {
    id: 3,
    roleId: 1,
    moduleId: 3,
    actions: ["read"]
  },

  // --- Technician ---
  {
    id: 4,
    roleId: 2,
    moduleId: 2,
    actions: ["read"] // solo ve devices
  },
  {
    id: 5,
    roleId: 2,
    moduleId: 3,
    actions: ["read"] // ve dashboard
  },

  // --- Viewer ---
  {
    id: 6,
    roleId: 3,
    moduleId: 3,
    actions: ["read"] // solo dashboard
  }
];
