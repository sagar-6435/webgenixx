import { Model } from 'mongoose';
import { Project, ProjectDocument } from './project.schema';
export declare class ProjectsService {
    private projectModel;
    constructor(projectModel: Model<ProjectDocument>);
    create(createProjectDto: any): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
    update(id: string, updateProjectDto: any): Promise<Project>;
    remove(id: string): Promise<any>;
}
