-- MySQL Database Script for Portfolio Project
-- Ready for MySQL Workbench or Railway MySQL Plugin
-- Created: 2025-09-17

-- Drop database if exists (uncomment if you want to start fresh)
-- DROP DATABASE IF EXISTS portfolio_db;

-- Create database
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Set character set and collation for UTF-8 support
SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

-- =============================================
-- USERS TABLE
-- =============================================
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- PROJECTS TABLE
-- =============================================
CREATE TABLE projects (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_projects_user_id (user_id),
    FOREIGN KEY (user_id) REFERENCES users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- BLOGS TABLE
-- =============================================
CREATE TABLE blogs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content LONGTEXT NOT NULL,
    author_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_blogs_author_id (author_id),
    INDEX idx_blogs_created_at (created_at),
    FOREIGN KEY (author_id) REFERENCES users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- SERVICES TABLE
-- =============================================
CREATE TABLE services (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_services_name (name),
    INDEX idx_services_price (price)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- TESTIMONIALS TABLE
-- =============================================
CREATE TABLE testimonials (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_testimonials_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- CONTACT_SUBMISSIONS TABLE
-- =============================================
CREATE TABLE contact_submissions (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_contact_email (email),
    INDEX idx_contact_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- SITE_SETTINGS TABLE
-- =============================================
CREATE TABLE site_settings (
    id INT NOT NULL AUTO_INCREMENT,
    setting_key VARCHAR(255) NOT NULL UNIQUE,
    setting_value TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY unique_setting_key (setting_key),
    INDEX idx_settings_key (setting_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- INSERT SAMPLE DATA (Optional - Remove if not needed)
-- =============================================

-- Sample user
INSERT INTO users (name, email, password) VALUES 
('Muhammad Irshad Khan', 'admin@portfolio.com', '$2b$10$hashedpasswordhere');

-- Sample services
INSERT INTO services (name, description, price) VALUES 
('Web Development', 'Full-stack web application development', 2500.00),
('Web Security', 'Security audits and penetration testing', 1500.00),
('SEO Optimization', 'Search engine optimization services', 800.00),
('Marketing Automation', 'Automated marketing campaigns setup', 1200.00),
('Copywriting', 'Professional copywriting services', 500.00);

-- Sample site settings
INSERT INTO site_settings (setting_key, setting_value) VALUES 
('site_title', 'Muhammad Irshad Khan - Portfolio'),
('site_description', 'Web Security & Development Specialist'),
('contact_email', 'contact@portfolio.com'),
('phone_number', '+1234567890'),
('address', 'Your Business Address'),
('social_linkedin', 'https://linkedin.com/in/yourprofile'),
('social_github', 'https://github.com/yourprofile'),
('social_twitter', 'https://twitter.com/yourprofile');

-- =============================================
-- USEFUL QUERIES FOR TESTING
-- =============================================

-- View all tables
-- SHOW TABLES;

-- Check table structure
-- DESCRIBE users;
-- DESCRIBE projects;
-- DESCRIBE blogs;
-- DESCRIBE services;
-- DESCRIBE testimonials;
-- DESCRIBE contact_submissions;
-- DESCRIBE site_settings;

-- Check foreign key constraints
-- SELECT 
--     TABLE_NAME,
--     COLUMN_NAME,
--     CONSTRAINT_NAME,
--     REFERENCED_TABLE_NAME,
--     REFERENCED_COLUMN_NAME
-- FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
-- WHERE REFERENCED_TABLE_SCHEMA = 'portfolio_db';

-- =============================================
-- PERFORMANCE OPTIMIZATIONS
-- =============================================

-- Additional indexes for common queries
CREATE INDEX idx_blogs_title ON blogs(title);
CREATE INDEX idx_projects_title ON projects(title);
CREATE INDEX idx_services_price_range ON services(price, name);

-- =============================================
-- BACKUP AND MAINTENANCE COMMANDS
-- =============================================

-- To backup database:
-- mysqldump -u username -p portfolio_db > portfolio_backup.sql

-- To restore database:
-- mysql -u username -p portfolio_db < portfolio_backup.sql

-- To check database size:
-- SELECT 
--     table_schema AS 'Database',
--     ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS 'Size (MB)'
-- FROM information_schema.tables 
-- WHERE table_schema = 'portfolio_db'
-- GROUP BY table_schema;

-- Script completed successfully
SELECT 'Database schema created successfully!' AS Status;