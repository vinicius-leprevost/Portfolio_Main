import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import contactRoutes from './routes/contact.routes.js';
import projectsRoutes from './routes/projects.routes.js';
import authRoutes from './routes/auth.routes.js';
import usersRoutes from './routes/user.routes.js';

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Other middleware
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// Routes
app.use('/', contactRoutes);
app.use('/', projectsRoutes);
app.use('/', usersRoutes)
app.use('/', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({"error" : err.name + ": " + err.message});
    } else if (err) {
        res.status(400).json({"error" : err.name + ": " + err.message});
        console.log(err);
    }
});

export default app;
