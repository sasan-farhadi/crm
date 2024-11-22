import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://github.com/sasan-farhadi" target="_blank" rel="noreferrer">
          SasanFarhadi
        </a>{" "}
        CRM Project &copy;
      </footer>
    </>
  );
}

export default Layout;
