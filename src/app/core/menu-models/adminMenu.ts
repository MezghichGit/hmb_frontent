import Menu from "./Menu";

 const adminMenu: Menu = {
   isDisabled:false,
   menuItems:[
     {
       name: "Dashboard",
       icon: "dashboard",
       url: "/dashboard/admin"
     },

     {
       name: "Users",
       icon: "team",
       subMenu: [
         { name: "All Users", url: "/users" },
        //  { name: "Add User", url: "/admin/users/add" }
       ]
     }
   ]
 };


export default adminMenu;
