import { GithubIconColumn } from '../columnsIcons/gitHubIcon/githubIconColumn';
import './style.css'
import { ProjectIconColumn } from '../columnsIcons/projectIcon/projectIconColumn';
import { StudentIcon } from '../columnsIcons/student/studentIcon';
import { WorkExperiencie } from '../columnsIcons/workExperience/workExperience';

export const ContentMain = () => {
  return (
    <div className="container-main">
      <GithubIconColumn style={{marginBottom:'50px'}}/>
      <ProjectIconColumn style={{marginBottom:'50px'}}/>
      <StudentIcon style={{marginBottom:'50px'}}/>
      <WorkExperiencie/>
    </div>
  );
};
