import React, { useState, useEffect } from "react";
import * as IdeasService from "../models/IdeasService";
import { useParams } from "react-router-dom";
import UpdateIdeaForm from "../UpdateIdeaForm/UpdateIdeaForm";
import Idea from "../models/Idea";
import styles from "./IdeaDetailPage.module.css";
const IdeaDetailPage = () => {
  const { id } = useParams();
  const [selectedIdea, setSelectedIdea] = useState<Idea>();
  const [editingIdea, setEditingIdea] = useState(false);
  useEffect(() => {
    const fetchData = async (id: string) => {
      const result = await IdeasService.fetchSpecificIdea(id);
      setSelectedIdea(result);
    };
    id != null && fetchData(id);
  }, [id]);
  const updateIdea = async (
    currentIdeaID: string,
    updatedIdea: Partial<Idea>
  ) => {
    const result = await IdeasService.updateIdea(currentIdeaID, updatedIdea);
    setSelectedIdea(result);
    setEditingIdea(false);
  };

  const getContent = () => {
    if (selectedIdea === undefined) return <h2>Still loading</h2>;
    if (editingIdea) {
      //TODO: Maybe move some of this stuff out to context.
      return (
        <UpdateIdeaForm
          currentIdea={selectedIdea}
          updateExistingIdea={updateIdea}
        />
      );
    } else {
      return (
        <React.Fragment>
          <h3>Summary: {selectedIdea.summary} </h3>
          <p>
            <b>Description</b>: {selectedIdea.description}
          </p>
          <p>
            <b>Status</b>: {selectedIdea.currentStatus}
          </p>
          <p>
            <b>Repository URL</b>: {selectedIdea.repositoryURL}
          </p>
          <p>
            <b>Website URL</b>: {selectedIdea.projectURL}
          </p>
        </React.Fragment>
      );
    }
  };

  return (
    <div className={styles.IdeaDetailPageWrapper}>
      <button onClick={() => setEditingIdea(!editingIdea)}>
        Toggle Edit Mode
      </button>
      {getContent()}
    </div>
  );
};

export default IdeaDetailPage;
