import styled from "styled-components";

const Header = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #1d2123;
`;
const Ul = styled.ul`
  padding-left: 14px;

  > li {
    font-size: 16px;
    font-weight: 700;
    margin-top: 14px;
    ul {
      padding: 0;
      margin-top: 8px;

      li {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 4px;
        user-select: none;
        label {
          display: flex;
          align-items: center;
          gap: 10px;
          input {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
`;
const Submit = styled.input`
  margin-top: 20px;
  padding: 10px 20px;
  background: #43ba7f;
  border: none;
  border-radius: 22px;
  width: 80%;
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.5px;
  transition: 300ms all;
  border: 1px solid #43ba7f;
  &:hover {
    background: #fff;
    color: #43ba7f;
    border: 1px solid #43ba7f;
  }
`;

function Filter({ products }) {
  return (
    <>
      <form>
        <Header>Əlaqəli kateqoriyalar</Header>
        <Ul>
          <li>
            Oyuncaqlar
            <ul>
              <li>
                <label>
                  <input type="checkbox" name="gender" value="m" />
                  Oğlan uşağı
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="gender" value="f" />
                  Qız uşağı
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="gender" value="o" />
                  Digər yaş qrupları
                </label>
              </li>
            </ul>
          </li>
          <li>
            Qutular
            <ul>
              {products
                .filter(
                  (a, i) => products.findIndex((s) => a.title === s.title) === i
                )
                .map((product, index) => (
                  <li key={index}>
                    <label>
                      {<input type="checkbox" name="box" value={product.box} />}
                      {product.title}
                    </label>
                  </li>
                ))}
            </ul>
          </li>
          <li>
            Qutu ölçüləri
            <ul>
              {products
                .filter(
                  (a, i) =>
                    products.findIndex((s) => a.sizeMore === s.sizeMore) === i
                )
                .map((product, index) => (
                  <li key={index}>
                    <label>
                      {
                        <input
                          type="checkbox"
                          name="box"
                          value={product.size}
                        />
                      }
                      {product.sizeMore}
                    </label>
                  </li>
                ))}
            </ul>
          </li>
        </Ul>
        <Submit type="submit" value="Sürprizləri Axtarın"></Submit>
      </form>
    </>
  );
}

export default Filter;
