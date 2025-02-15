export default function ProfileLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <div className="procont">Profile header</div>
          {children}
          <div className="procont">Profile footer</div>
        </body>
          
      </html>
    );
  }
  