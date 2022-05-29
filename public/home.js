function Home() {
    return(
        <>
        <NavBar/>
        <Card
            bgcolor= "primary"
            txtcolor="black"
            header="BadBank Landing Module"
            title="Welcome to the bank"
            text="You can move around using the navigation bar."
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
            status="System Online"
        />
        {/* <Link to="/CreateAccount">
          <button type="submit">Create a new Account</button>
        </Link>
        <br/>

        <Link to="/Login">
          <button type="submit">Go to Login</button>
        </Link>
        <br/> */}
        </>
    )
}