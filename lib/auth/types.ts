export interface UserSession {
    id: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    image?: string | null;
}

export interface SessionData {
    user: UserSession;
    session: {
        id: string;
        userId: string;
        token: string;
        expiresAt: Date;
        createdAt: Date;
        updatedAt: Date;
    };
}
