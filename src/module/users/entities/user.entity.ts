import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'users', name: 'users_user'})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @Column()
    status: string;

    @Column()
    created_at: Date;
    


}
