export const componentStates = $state({
    darkMode: false,
    textInputData: "",
    isDialogOpen: false,
    isModalOpen: false,
    isLeftDrawerOpen: false,
    isRightDrawerOpen: false,
    isTopDrawerOpen: false,
    isBottomDrawerOpen: false,
    testTableData: {
        headers: ["Table Header 1", "Table Header 1", "Table Header 1"],
        data: [
            [1, 2, 3],
            [4, 5, 6],
            [8, 9, 10],
        ],
        footer: ["Table Footer 1", "Table Footer 1", "Table Footer 1"],
    }
});