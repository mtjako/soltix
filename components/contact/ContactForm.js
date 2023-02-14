import styled from "styled-components";

export default function ContactForm({
  step,
  formTemplate,
  formData,
  formDataFile,
  save,
}) {
  return (
    <ContactFormWrapper>
      <h2>{formTemplate[step].title}</h2>
      {formTemplate[step].type == "welcome" && (
        <ContactWelcome
          dangerouslySetInnerHTML={{ __html: formTemplate[step].data[0] }}
        ></ContactWelcome>
      )}
      {formTemplate[step].type == "checkbox" && (
        <ContactCheckboxWrap>
          {formTemplate[step].data.map((item, index) => (
            <ContactCheckbox key={"step" + step + index}>
              <input
                type="checkbox"
                id={item}
                defaultChecked={
                  formData[step] ? formData[step].includes(item) : null
                }
              />
              <label htmlFor={item}>{item}</label>
            </ContactCheckbox>
          ))}
        </ContactCheckboxWrap>
      )}
      {formTemplate[step].type == "textarea" && (
        <ContactInput
          id={"textarea" + step + 1}
          key={"step" + step + 1}
          defaultValue={formData[step]}
        />
      )}
      {formTemplate[step].type == "textareaFile" && (
        <>
          <ContactInput
            id={"textarea" + step + 1}
            key={"step" + step + 1}
            defaultValue={formData[step] ? formData[step][0] : null}
          />
          <FileBox>
            <input
              id={"inputFile" + step + 1}
              type="file"
              multiple
              onChange={() => save()}
            />
            <p className="label">{formDataFile.length} files</p>
          </FileBox>
          <br />
          <ContactInputWrap>
            {formTemplate[step].data2.map((item, index) => (
              <ContactInputItem
                key={"step" + step + index}
                className={item.type}
              >
                <label htmlFor={item.name}>{item.name}</label>
                <input
                  type={"checkbox"}
                  id={item.name}
                  name={item.name}
                  defaultValue={formData[step] ? formData[step][index] : null}
                  defaultChecked={formData[step] ? formData[step][index] : null}
                />
              </ContactInputItem>
            ))}
          </ContactInputWrap>
        </>
      )}
      {formTemplate[step].type == "radio" && (
        <ContactRadioWrap>
          {formTemplate[step].data.map((item, index) => (
            <ContactRadio key={"step" + step + index}>
              <input
                type="radio"
                id={item}
                name={"step" + step}
                defaultChecked={
                  formData[step] ? formData[step].includes(item) : null
                }
              />
              <label htmlFor={item}>{item}</label>
            </ContactRadio>
          ))}
        </ContactRadioWrap>
      )}
      {formTemplate[step].type == "input" && (
        <ContactInputWrap>
          {formTemplate[step].data.map((item, index) => (
            <ContactInputItem key={"step" + step + index} className={item.type}>
              <label htmlFor={item.name}>{item.name}</label>
              <input
                type={item.type}
                id={item.name}
                name={item.name}
                defaultValue={formData[step] ? formData[step][index] : null}
                defaultChecked={formData[step] ? formData[step][index] : null}
              />
            </ContactInputItem>
          ))}
        </ContactInputWrap>
      )}
    </ContactFormWrapper>
  );
}

const ContactInputWrap = styled.div`
  display: grid;
  gap: 24px 32px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ContactInputItem = styled.div`
  display: flex;
  flex-direction: column;
  &.checkbox {
    flex-direction: row-reverse;
  }
  input {
    border: none;
    background-color: ${(props) => props.theme.neutral100};
    padding: 8px;
    border-radius: 4px;
  }
  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: ${(props) => props.theme.neutral100};
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
    box-sizing: border-box;
  }
  input[type="checkbox"]:checked {
    background-color: ${(props) => props.theme.blue600};
  }
  label {
    cursor: pointer;
    max-width: calc(100% - 32px);
    &::selection {
      background: transparent;
    }
  }
`;

const ContactFormWrapper = styled.form`
  margin: 16px 0 32px;
  h2 {
    margin-bottom: 16px;
    color: ${(props) => props.theme.neutral700};
  }
  input[type="file"] {
    &::-webkit-file-upload-button {
      background-color: ${(props) => props.theme.neutral100};
      border: none;
      color: ${(props) => props.theme.neutral600};
      padding: 8px 32px;
      width: 150px;
      height: 32px;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      &::selection {
        background: transparent;
      }
    }
  }
`;
const ContactWelcome = styled.div`
  max-width: 570px;
  p {
    margin-bottom: 8px;
  }
`;

const ContactRadioWrap = styled.div``;

const ContactRadio = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: ${(props) => props.theme.neutral100};
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    box-sizing: border-box;
  }
  input[type="radio"]:checked {
    background-color: ${(props) => props.theme.blue600};
  }
  label {
    cursor: pointer;
    max-width: calc(100% - 32px);
    &::selection {
      background: transparent;
    }
  }
  input[type="checkbox"]:checked + label {
    font-weight: 600;
  }
`;

const ContactCheckboxWrap = styled.div``;

const ContactInput = styled.textarea`
  resize: none;
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.neutral100};
  border: none;
  border-radius: 8px;
  padding: 16px 12px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.neutral700};
  outline: none;
  box-shadow: none;
`;

const ContactCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: ${(props) => props.theme.neutral100};
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
    box-sizing: border-box;
  }
  input[type="checkbox"]:checked {
    background-color: ${(props) => props.theme.blue600};
  }
  label {
    cursor: pointer;
    max-width: calc(100% - 32px);
    &::selection {
      background: transparent;
    }
  }
  input[type="checkbox"]:checked + label {
    font-weight: 600;
  }
`;

const FileBox = styled.div`
  display: flex;
  position: relative;
  .label {
    position: absolute;
    left: 150px;
    color: #000;
    background-color: #fff;
    height: 32px;
    width: 150px;
    padding: 0 8px;
    font-size: 13px;
    line-height: 32px;
  }
`;
