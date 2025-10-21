import { memo } from "react";
import styled from "styled-components";
import { type ComponentProcessProps } from "components/system/Apps/RenderComponent";
import useTitle from "components/system/Window/useTitle";

const StyledTestApp = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  background: #1e1e2e;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  
  .header {
    text-align: center;
    margin-bottom: 20px;
    
    h1 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
  }
`;

const TestApp: FC<ComponentProcessProps> = ({ id }) => {
  useTitle(id);
  
  return (
    <StyledTestApp>
      <div className="header">
        <h1>Test App</h1>
        <p>If you can see this, the app system is working!</p>
      </div>
    </StyledTestApp>
  );
};

export default memo(TestApp);