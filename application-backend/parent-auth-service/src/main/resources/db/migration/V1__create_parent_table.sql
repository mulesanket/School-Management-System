-- Flyway migration: create parents table with pupil_name and relationship
DROP TABLE IF EXISTS parents;

CREATE TABLE parents (
    id BIGSERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(20),

    pupil_name VARCHAR(255),
    relationship VARCHAR(50),

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
