import cors from 'cors';
import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import brandRouter from './routes/brand';
import JSONResponse from './utils/JSONResponse';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.setupMiddleware();
        this.setupRoutes();
        this.setupErrorHandling();
        this.connectToDatabase();
    }

    private setupMiddleware(): void {
        this.app.use(cors()); // Enable all CORS
        this.app.use(express.json());
    }

    private setupRoutes(): void {
        this.app.use('/api/brands', brandRouter); // Handle brand routes
        this.setupNotFoundHandler();
    }

    private setupNotFoundHandler(): void {
        this.app.use('*', (req: Request, res: Response) => {
            JSONResponse.notFound(res, 'Page not found');
        });
    }

    private setupErrorHandling(): void {
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            console.error(err.stack); // Log the error
            JSONResponse.serverError(res, 'Internal Server Error');
        });
    }

    private connectToDatabase(): void {
        const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/accenture';

        mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        mongoose.connection.on('error', (err: any) => {
            console.error(`MongoDB Connection Error: ${err}`);
        });
    }
}

export default new App().app;
