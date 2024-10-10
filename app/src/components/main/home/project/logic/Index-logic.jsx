import { useState } from "react";
import Index from "../rendering/Index";
export default function IndexLogic() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Index
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      selectedProject={selectedProject}
      setSelectedProject={setSelectedProject}
    />
  );
}
