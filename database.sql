CREATE TABLE printers (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    text VARCHAR(1500) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    type VARCHAR(50) NOT NULL
);

INSERT INTO printers (title, text, price, type)
VALUES ('Canon imageRUNNER 2425', 'The Canon imageRUNNER 2425 is a versatile monochrome laser multifunction printer designed for office use, offering printing, copying, and scanning capabilities at a maximum speed of 25 pages per minute. Its suitable for medium to large workgroups, providing efficient document processing.', 1000, 'ink'),
('HP Laser 107a', 'The HP Laser 107a is a monochrome laser printer designed for small office and personal use, offering a maximum print speed of 20 pages per minute and a resolution of up to 1200 x 1200 dpi. With its compact design and affordability, its a suitable choice for basic black and white printing needs.', 150, 'laser'),
('Epson L11160 A3', 'The Epson L11160 A3 is a multifunction inkjet printer designed to handle A3-sized printing and scanning. It features a high-capacity ink tank system, which is known for its cost-effective printing. This printer can handle various media sizes and offers features like borderless printing and wireless connectivity.', 500 'ink'),
('CANON i-SENSYS MF3010', 'The Canon i-SENSYS MF3010 is a compact monochrome laser all-in-one printer designed for home and small office use. It offers printing, scanning, and copying functions and features a space-saving design. With a print speed of up to 19 pages per minute and a user-friendly interface, its a practical choice for basic document tasks.', 900, 'laser'),
('EPSON L805', 'The HP Smart Tank 515 is an all-in-one inkjet printer designed for home and small office use. It features a refillable ink tank system, Its designed for home and small office use and supports borderless photo printing, making it an excellent choice for users who want to print high-resolution photos. The printer uses a six-color ink tank system, ensuring vibrant and detailed photo prints.', 800, 'ink'),
('HP Smart Tank 515', 'The Epson L11160 A3 is a multifunction inkjet printer designed to handle A3-sized printing and scanning. providing a cost-effective solution for high-volume printing. This printer offers printing, scanning, and copying functions and supports wireless connectivity, making it a versatile choice for various document tasks and easy network integration.', 1200, 'laser');