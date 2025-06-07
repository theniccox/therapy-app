-- Drop tables if they exist
DROP TABLE IF EXISTS therapists;
DROP TABLE IF EXISTS user_questionnaires;

-- Create therapists table
CREATE TABLE therapists (
    therapist_id INTEGER PRIMARY KEY AUTOINCREMENT,
    therapist_name TEXT NOT NULL,
    location TEXT NOT NULL,
    hourly_rate_gbp REAL,
    is_age TEXT,
    supports_age TEXT,
    is_race TEXT,
    supports_race TEXT,
    is_gender TEXT,
    supports_gender TEXT,
    reason TEXT,
    sub_reason TEXT,
    experience_start INTEGER,
    therapy_type TEXT,
    language TEXT,
    faith TEXT,
    source_id TEXT,
    online BOOLEAN DEFAULT FALSE,
    profile_image TEXT,
    bio TEXT
);

-- Create user questionnaires table
CREATE TABLE user_questionnaires (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    feeling TEXT NOT NULL,
    exploration_goal TEXT NOT NULL,
    statement TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample therapist data for Wembley area
INSERT INTO therapists (
    therapist_name, location, hourly_rate_gbp, 
    is_age, supports_age, is_race, supports_race, 
    is_gender, supports_gender, reason, sub_reason, 
    experience_start, therapy_type, language, faith, 
    source_id, online, profile_image, bio
) VALUES
    ('Dr. Sarah Johnson', 'Wembley, London', 85, 
    '35-45', '18-65', 'White British', 'All backgrounds', 
    'Female', 'All genders', 'Anxiety', 'Social anxiety', 
    2010, 'CBT', 'English', 'None', 'counselling-directory', 
    TRUE, '/images/therapist1.jpg', 'Specializing in anxiety and depression with 13 years of experience.'),
    
    ('Michael Chen', 'Wembley, London', 70, 
    '30-40', '16-70', 'Asian', 'Asian, Black, Mixed', 
    'Male', 'Male, Non-binary', 'Depression', 'Clinical depression', 
    2015, 'Psychodynamic', 'English, Mandarin', 'Buddhist', 'psychology-today', 
    TRUE, '/images/therapist2.jpg', 'Helping clients explore their inner world through psychodynamic therapy.'),
    
    ('Amara Okafor', 'Wembley, London', 90, 
    '40-50', 'All ages', 'Black African', 'Black, Mixed race', 
    'Female', 'Female, LGBTQ+', 'Trauma', 'PTSD', 
    2008, 'EMDR', 'English, Yoruba', 'Christian', 'therapist-directory', 
    FALSE, '/images/therapist3.jpg', 'Trauma specialist with expertise in EMDR and somatic experiencing.'),
    
    ('James Wilson', 'Wembley, London', 65, 
    '50-60', '25-75', 'White British', 'All backgrounds', 
    'Male', 'All genders', 'Relationships', 'Couples therapy', 
    2005, 'Systemic', 'English', 'None', 'counselling-directory', 
    TRUE, '/images/therapist4.jpg', 'Relationship counselor with over 20 years of experience helping couples.'),
    
    ('Priya Patel', 'Wembley, London', 75, 
    '35-45', '18-60', 'South Asian', 'South Asian, Middle Eastern', 
    'Female', 'Female', 'Identity', 'Cultural identity', 
    2012, 'Integrative', 'English, Hindi, Gujarati', 'Hindu', 'psychology-today', 
    TRUE, '/images/therapist5.jpg', 'Specializing in cultural identity issues and intergenerational trauma.'),
    
    ('David Thompson', 'Wembley, London', 80, 
    '45-55', 'All ages', 'White British', 'All backgrounds', 
    'Male', 'Male, LGBTQ+', 'Addiction', 'Substance abuse', 
    2007, 'CBT, Motivational Interviewing', 'English', 'None', 'therapist-directory', 
    FALSE, '/images/therapist6.jpg', 'Addiction specialist with experience in substance abuse and behavioral addictions.'),
    
    ('Fatima Ahmed', 'Wembley, London', 70, 
    '30-40', '16-65', 'Middle Eastern', 'Middle Eastern, South Asian', 
    'Female', 'Female', 'Anxiety', 'Religious/cultural conflict', 
    2014, 'Person-centered', 'English, Arabic', 'Muslim', 'counselling-directory', 
    TRUE, '/images/therapist7.jpg', 'Helping clients navigate cultural and religious identity conflicts.'),
    
    ('Robert Kim', 'Wembley, London', 95, 
    '40-50', '18-70', 'East Asian', 'All backgrounds', 
    'Male', 'All genders', 'Work stress', 'Burnout', 
    2006, 'ACT', 'English, Korean', 'None', 'psychology-today', 
    TRUE, '/images/therapist8.jpg', 'Executive coach and therapist specializing in workplace stress and burnout.'),
    
    ('Olivia Martinez', 'Wembley, London', 85, 
    '35-45', 'All ages', 'Hispanic', 'All backgrounds', 
    'Female', 'All genders', 'Family issues', 'Parenting', 
    2011, 'Family Systems', 'English, Spanish', 'Catholic', 'therapist-directory', 
    FALSE, '/images/therapist9.jpg', 'Family therapist helping parents and children build healthier relationships.'),
    
    ('Kwame Osei', 'Wembley, London', 75, 
    '30-40', '16-60', 'Black African', 'Black, Mixed race', 
    'Male', 'Male', 'Self-esteem', 'Racial identity', 
    2013, 'Narrative Therapy', 'English', 'Christian', 'counselling-directory', 
    TRUE, '/images/therapist10.jpg', 'Helping clients rewrite their personal narratives and build confidence.');
