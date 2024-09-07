-- SQLite
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS workspaces (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    workspaceData TEXT NOT NULL,
    userId TEXT NOT NULL,
	workspaceName TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS guestsWorkspaces (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    workspaceData TEXT NOT NULL,
    executionStatus BOOLEAN DEFAULT 0, -- Field to track if execution was performed (0 for no, 1 for yes)
    changesAfterExecution BOOLEAN DEFAULT 0, -- Field to track if changes were made after execution (0 for no, 1 for yes)
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

--DELETE FROM users;
--DELETE FROM workspaces;
-- delete table guestsWorkspaces not only its data
--DROP TABLE IF EXISTS guestsWorkspaces;
--DELETE FROM guestsWorkspaces;

-- delete the data of guestsWorkspaces table
--DELETE FROM sqlite_sequence WHERE name='guestsWorkspaces';