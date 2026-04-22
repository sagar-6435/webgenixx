import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: any): Promise<import("./project.schema").Project>;
    findAll(): Promise<import("./project.schema").Project[]>;
    findOne(id: string): Promise<import("./project.schema").Project>;
    update(id: string, updateProjectDto: any): Promise<import("./project.schema").Project>;
    remove(id: string): Promise<any>;
    uploadFile(file: Express.Multer.File): {
        url: string;
    };
}
