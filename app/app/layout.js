export const metadata = {
  title: "Car Rental – TBA",
  description: "Simple and reliable car rentals"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
