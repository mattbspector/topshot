/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */

function BasicLayout({ children }) {
  return (
    <div style={{
      position: 'relative', display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100%',
    }}
    >
      <div style={{
        position: 'sticky', top: '0px', right: '0px', left: '0px', zIndex: '5', backgroundColor: 'rgb(33, 33, 39)',
      }}
      >
        <div style={{ boxSizing: 'border-box' }}>
          <div style={{
            paddingRight: '24px', width: '100%', margin: '0 auto', padding: '0 16px', maxWidth: 'calc(1256px)',
          }}
          >
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, max-content) 1fr', alignItems: 'center', height: '60px',
            }}
            >
              <a href="/" style={{ textDecoration: 'none', backgroundColor: 'transparent' }}>
                <img src="/static/img/top-shot-logo-horizontal-white.svg" alt="NBA Top Shot" style={{ display: 'block', width: '120px' }} />
              </a>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: '1ch',
                padding: '2px 5px',
                width: 'fit-content',
                maxHeight: '20px',
                color: 'rgb(255, 255, 255)',
                fontFamily: 'Shapiro, sans-serif',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '2.2px',
                textTransform: 'uppercase',
                whiteSpace: 'pre',
                backgroundColor: 'rgb(50, 94, 255)',

              }}
              >
                BETA

              </div>
              <div style={{
                display: 'flex', alignItems: 'center', flex: '1 1 0%', margin: '0 32px 0 0', height: '100%',
              }}
              >
                <div style={{
                  paddingRight: '16px', paddingLeft: '27px', width: 'fit-content', height: '100%', cursor: 'pointer',
                }}
                >
                  <a
                    href="/"
                    style={{
                      fontFamily: 'Shapiro, sans-serif',
                      fontWeight: '700',
                      fontSize: '11px',
                      letterSpacing: '2.2px',
                      lineHeight: '13px',
                      textTransform: 'uppercase',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      width: 'fit-content',
                      height: '100%',
                      color: 'rgb(255, 255, 255)',
                      cursor: 'pointer',
                    }}
                  >
                    packs

                  </a>
                </div>
                <div style={{
                  paddingRight: '16px', paddingLeft: '27px', width: 'fit-content', height: '100%', cursor: 'pointer',
                }}
                >
                  <a
                    href="/"
                    style={{
                      fontFamily: 'Shapiro, sans-serif',
                      fontWeight: '700',
                      fontSize: '11px',
                      letterSpacing: '2.2px',
                      lineHeight: '13px',
                      textTransform: 'uppercase',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      width: 'fit-content',
                      height: '100%',
                      color: 'rgb(255, 255, 255)',
                      cursor: 'pointer',
                    }}
                  >
                    marketplace

                  </a>
                </div>
                <div style={{
                  paddingRight: '16px', paddingLeft: '27px', width: 'fit-content', height: '100%', cursor: 'pointer',
                }}
                >
                  <a
                    href="/"
                    style={{
                      fontFamily: 'Shapiro, sans-serif',
                      fontWeight: '700',
                      fontSize: '11px',
                      letterSpacing: '2.2px',
                      lineHeight: '13px',
                      textTransform: 'uppercase',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      width: 'fit-content',
                      height: '100%',
                      color: 'rgb(255, 255, 255)',
                      cursor: 'pointer',
                    }}
                  >
                    community

                  </a>
                </div>
                <div style={{
                  paddingRight: '16px', paddingLeft: '27px', width: 'fit-content', height: '100%', cursor: 'pointer',
                }}
                >
                  <a
                    href="/"
                    style={{
                      fontFamily: 'Shapiro, sans-serif',
                      fontWeight: '700',
                      fontSize: '11px',
                      letterSpacing: '2.2px',
                      lineHeight: '13px',
                      textTransform: 'uppercase',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      width: 'fit-content',
                      height: '100%',
                      color: 'rgb(255, 255, 255)',
                      cursor: 'pointer',
                    }}
                  >
                    collection

                  </a>
                </div>
                <div style={{
                  paddingRight: '16px', paddingLeft: '27px', width: 'fit-content', height: '100%', cursor: 'pointer',
                }}
                >
                  <a
                    href="/"
                    style={{
                      fontFamily: 'Shapiro, sans-serif',
                      fontWeight: '700',
                      fontSize: '11px',
                      letterSpacing: '2.2px',
                      lineHeight: '13px',
                      textTransform: 'uppercase',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      width: 'fit-content',
                      height: '100%',
                      color: 'rgb(255, 255, 255)',
                      cursor: 'pointer',
                    }}
                  >
                    support

                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-black h-screen w-screen text-white" style={{ padding: '32px', paddingTop: '0px', fontFamily: 'Shapiro, sans-serif' }}>{children}</div>
    </div>
  );
}

export default BasicLayout;
