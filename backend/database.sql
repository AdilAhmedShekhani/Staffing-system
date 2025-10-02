CREATE TABLE Candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    skills TEXT,
    experience INT
);

CREATE TABLE Clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(100),
    contact_details TEXT
);

CREATE TABLE Jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    client_id INT,
    is_open BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (client_id) REFERENCES Clients(id)
);

CREATE TABLE Assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT,
    job_id INT,
    FOREIGN KEY (candidate_id) REFERENCES Candidates(id),
    FOREIGN KEY (job_id) REFERENCES Jobs(id)
);
