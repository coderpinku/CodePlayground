import CustomButton from '@/components/ui/CustomButton';
import { FaPlay, FaMagic } from 'react-icons/fa';

const Toolbar = () => (
  <div className="bg-light border-bottom p-2 d-flex gap-2">
    <CustomButton
      label="Run"
      onClick={() => console.log('Run')}
      icon={<FaPlay />}
      variant="success"
    />
    <CustomButton
      label="Format"
      onClick={() => console.log('Format')}
      icon={<FaMagic />}
      variant="info"
    />
  </div>
);

export default Toolbar;
