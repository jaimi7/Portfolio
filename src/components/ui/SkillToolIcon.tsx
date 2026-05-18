import gitIcon from '@/assets/tool/git.png';
import mongodbIcon from '@/assets/tool/mongodb.png';
import mysqlIcon from '@/assets/tool/mysql.png';
import graphqlIcon from '@/assets/tool/graphql.png';
import dockerIcon from '@/assets/tool/docker.png';
import awsIcon from '@/assets/tool/aws.png';
import azureIcon from '@/assets/tool/azure.png';
import oracleIcon from '@/assets/tool/oracle.png';

type SkillIconProps = {
    type: string;
};

export default function SkillIcon({ type }: SkillIconProps) {
    const iconClass = "mb-1 md:mb-2 w-6 h-6 md:w-8 md:h-8 object-contain transition-transform duration-300 hover:scale-110";

    switch (type.toLowerCase()) {
        case 'git':
            return <img src={gitIcon} alt="Git" className={iconClass} />;

        case 'mongodb':
            return <img src={mongodbIcon} alt="MongoDB" className={iconClass} />;

        case 'mysql':
            return <img src={mysqlIcon} alt="MySQL" className={iconClass} />;

        case 'graphql':
            return <img src={graphqlIcon} alt="GraphQL" className={iconClass} />;

        case 'docker':
            return <img src={dockerIcon} alt="Docker" className={iconClass} />;

        case 'aws':
            return <img src={awsIcon} alt="AWS" className={iconClass} />;

        case 'azure':
            return <img src={azureIcon} alt="Azure" className={iconClass} />;

        case 'oracle':
            return <img src={oracleIcon} alt="Oracle" className={iconClass} />;

        default:
            return null;
    }
}