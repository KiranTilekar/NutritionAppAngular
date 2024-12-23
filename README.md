# Nutrition App

## **Interfaces**
    1.User
    (userId, name, loginName, email, password, height, weight, BMI, preference, category, role)


## Pages
1. Home (Landing Page)
2. Login
    * userService.loginUser(user)
3. Register
    * userService.registerUser(user)
    * calculateBMI(height, weight)(with category)
4. UserDashboard


## Components
1. Navbar
    * userService.logoutUser()


## Services
1. **UserService**
    * getUserData => loginUser(user)
        * role based dashboard redirection
    * setUserData => registerUser(user)
        * redirect to login
    * logoutUser()
        * redirect to Home page (landing page)


