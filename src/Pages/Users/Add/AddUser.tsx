import "./AddUser.scss"

function AddUser() {
    return (
        <div className="add-user">
            <h1>Add User</h1>
            <form action="POST" className="add-user-form">
                <div className="form-group">
                    <div className="input-group">
                        <label htmlFor="FirstName" className="label">First Name</label>
                        <input type="text" name="FirstName" id="FirstName" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="MiddleName" className="label">Middle Name</label>
                        <input type="text" name="MiddleName" id="MiddleName" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="LastName" className="label">Last Name</label>
                        <input type="text" name="LastName" id="LastName" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <label htmlFor="Email" className="label">Email</label>
                        <input type="email" name="Email" id="Email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="EmailConfirm" className="label">Confirm Email</label>
                        <input type="email" name="EmailConfirm" id="EmailConfirm" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <label htmlFor="Password" className="label">Password</label>
                        <input type="password" name="Password" id="Password" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="PasswordConfirm" className="label">Confirm Password</label>
                        <input type="password" name="PasswordConfirm" id="PasswordConfirm" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddUser;