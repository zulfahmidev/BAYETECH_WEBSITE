let toggle = document.querySelector("#toggle")
let sidebar = document.querySelector('#sidebar')
let isSidebarOpen = false

toggle.onclick = () => {
    if (isSidebarOpen) {
        sidebar.style.top = "-100%"
        isSidebarOpen = false
    } else {
        sidebar.style.top = "0%"
        isSidebarOpen = true
    }
}

function closeSidebar() {
    sidebar.style.top = "-100%"
    isSidebarOpen = false
}