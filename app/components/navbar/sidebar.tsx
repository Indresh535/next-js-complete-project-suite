import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

const Sidebar: React.FC<LayoutProps> = () => {
    return (
        <>
            <nav className="tw-fixed tw-top-0 tw-z-50 tw-w-full tw-bg-white tw-border-b tw-border-gray-200 dark:tw-bg-gray-800 dark:tw-border-gray-700">
                <div className="tw-px-3 tw-py-3 lg:tw-px-5 lg:tw-pl-3">
                    <div className="tw-flex tw-items-center tw-justify-between">
                        <div className="tw-flex tw-items-center tw-justify-start rtl:tw-justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="tw-inline-flex tw-items-center tw-p-2 tw-text-sm tw-text-gray-500 tw-rounded-lg sm:tw-hidden hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-gray-200 dark:tw-text-gray-400 dark:tw-hover:bg-gray-700 dark:tw-focus:tw-ring-gray-600">
                                <span className="tw-sr-only">Open sidebar</span>
                                <svg className="tw-w-6 tw-h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="https://flowbite.com" className="tw-flex tw-ms-2 md:tw-me-24">
                                <img src="https://flowbite.com/docs/images/logo.svg" className="tw-h-8 tw-me-3" alt="FlowBite Logo" />
                                <span className="tw-self-center tw-text-xl tw-font-semibold sm:tw-text-2xl tw-whitespace-nowrap dark:tw-text-white">Flowbite</span>
                            </a>
                        </div>
                        <div className="tw-items-end tw-justify-between tw-hidden tw-w-full md:tw-flex md:tw-w-auto md:tw-order-1" id="navbar-language">
    <ul className="tw-flex tw-flex-col tw-font-medium tw-p-4 md:tw-p-0 tw-mt-4 tw-border tw-border-gray-100 tw-rounded-lg tw-bg-gray-50 md:tw-space-x-8 rtl:tw-space-tw-x-reverse md:tw-flex-row md:tw-mt-0 md:tw-border-0 md:tw-bg-white dark:tw-bg-gray-800 md:dark:tw-bg-gray-900 dark:tw-border-gray-700">
      <li>
        <a href="#" className="tw-block tw-py-2 tw-px-3 tw-text-white tw-bg-blue-700 tw-rounded md:tw-bg-transparent md:tw-text-blue-700 md:tw-p-0 md:dark:tw-text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="tw-block tw-py-2 tw-px-3 md:tw-p-0 tw-text-gray-900 tw-rounded hover:tw-bg-gray-100 md:hover:tw-bg-transparent md:hover:tw-text-blue-700 dark:tw-text-white md:dark:hover:tw-text-blue-500 dark:hover:tw-bg-gray-700 dark:hover:tw-text-white md:dark:hover:tw-bg-transparent dark:tw-border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="tw-block tw-py-2 tw-px-3 md:tw-p-0 tw-text-gray-900 tw-rounded hover:tw-bg-gray-100 md:hover:tw-bg-transparent md:hover:tw-text-blue-700 dark:tw-text-white md:dark:hover:tw-text-blue-500 dark:hover:tw-bg-gray-700 dark:hover:tw-text-white md:dark:hover:tw-bg-transparent dark:tw-border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="tw-block tw-py-2 tw-px-3 md:tw-p-0 tw-text-gray-900 tw-rounded hover:tw-bg-gray-100 md:hover:tw-bg-transparent md:hover:tw-text-blue-700 dark:tw-text-white md:dark:hover:tw-text-blue-500 dark:hover:tw-bg-gray-700 dark:hover:tw-text-white md:dark:hover:tw-bg-transparent dark:tw-border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" className="tw-block tw-py-2 tw-px-3 md:tw-p-0 tw-text-gray-900 tw-rounded hover:tw-bg-gray-100 md:hover:tw-bg-transparent md:hover:tw-text-blue-700 dark:tw-text-white md:dark:hover:tw-text-blue-500 dark:hover:tw-bg-gray-700 dark:hover:tw-text-white md:dark:hover:tw-bg-transparent dark:tw-border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
                        <div className="tw-flex tw-items-center md:tw-order-2 tw-space-x-1 md:tw-space-x-0 rtl:space-x-reverse">
  <button type="button" data-dropdown-toggle="language-dropdown-menu" className="tw-inline-flex tw-items-center tw-font-medium tw-justify-center tw-px-4 tw-py-2 tw-text-sm tw-text-gray-900 dark:tw-text-white tw-rounded-lg tw-cursor-pointer tw-hover:bg-gray-100 dark:tw-hover:bg-gray-700 dark:tw-hover:text-white">
    English (US)
  </button>
  <div className="tw-z-50 tw-hidden tw-my-4 tw-text-base tw-list-none tw-bg-white tw-divide-y tw-divide-gray-100 tw-rounded-lg tw-shadow tw-dark:bg-gray-700" id="language-dropdown-menu">
    <ul className="tw-py-2 tw-font-medium" role="none">
      <li>
        <a href="#" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 tw-hover:bg-gray-100 dark:tw-text-gray-400 dark:tw-hover:bg-gray-600 dark:tw-hover:text-white" role="menuitem">
          <div className="tw-inline-flex tw-items-center">
            English (US)
          </div>
        </a>
      </li>
      <li>
        <a href="#" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 tw-hover:bg-gray-100 dark:tw-text-gray-400 dark:tw-hover:bg-gray-600 dark:tw-hover:text-white" role="menuitem">
          <div className="tw-inline-flex tw-items-center">
             Deutsch
          </div>
        </a>
      </li>
      <li>
        <a href="#" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 tw-hover:bg-gray-100 dark:tw-text-gray-400 dark:tw-hover:bg-gray-600 dark:tw-hover:text-white" role="menuitem">
          <div className="tw-inline-flex tw-items-center">
            Italiano
          </div>
        </a>
      </li>
      <li>
        <a href="#" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 tw-hover:bg-gray-100 dark:tw-text-gray-400 dark:tw-hover:bg-gray-600 dark:tw-hover:text-white" role="menuitem">
          <div className="tw-inline-flex tw-items-center">
            
              pp
          </div>
        </a>
      </li>
    </ul>
  </div>
  <button data-collapse-toggle="navbar-language" type="button" className="tw-inline-flex tw-items-center tw-p-2 tw-w-10 tw-h-10 tw-justify-center tw-text-sm tw-text-gray-500 tw-rounded-lg tw-md:hidden tw-hover:bg-gray-100 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-gray-200 dark:tw-text-gray-400 dark:tw-hover:bg-gray-700 dark:tw-focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
    <span className="tw-sr-only">Open main menu</span>
    <svg className="tw-w-5 tw-h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
    </svg>
  </button>
</div>


                        {/* <div className="tw-flex tw-items-center">
                            <div className="tw-flex tw-items-center tw-ms-3">
                                <div>
                                    <button type="button" className="tw-flex tw-text-sm tw-bg-gray-800 tw-rounded-full focus:tw-ring-4 focus:tw-ring-gray-300 dark:focus:tw-ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="tw-sr-only">Open user menu</span>
                                        <img className="tw-w-8 tw-h-8 tw-rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                    </button>
                                </div>
                                <div className="tw-z-50 tw-hidden tw-my-4 tw-text-base tw-list-none tw-bg-white tw-divide-y tw-divide-gray-100 tw-rounded tw-shadow dark:tw-bg-gray-700 dark:tw-divide-gray-600" id="dropdown-user">
                                    <div className="tw-px-4 tw-py-3" role="none">
                                        <p className="tw-text-sm tw-text-gray-900 dark:tw-text-white" role="none">
                                            Neil Sims
                                        </p>
                                        <p className="tw-text-sm tw-font-medium tw-text-gray-900 tw-truncate dark:tw-text-gray-300" role="none">
                                            neil.sims@flowbite.com
                                        </p>
                                    </div>
                                    <ul className="tw-py-1" role="none">
                                        <li>
                                            <a href="#" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 hover:tw-bg-gray-100 dark:tw-text-gray-300 dark:tw-hover:bg-gray-600 dark:hover:tw-text-white" role="menuitem">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 hover:tw-bg-gray-100 dark:tw-text-gray-300 dark:tw-hover:bg-gray-600 dark:hover:tw-text-white" role="menuitem">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 hover:tw-bg-gray-100 dark:tw-text-gray-300 dark:tw-hover:bg-gray-600 dark:hover:tw-text-white" role="menuitem">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 hover:tw-bg-gray-100 dark:tw-text-gray-300 dark:tw-hover:bg-gray-600 dark:hover:tw-text-white" role="menuitem">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className="tw-fixed tw-top-0 tw-left-0 tw-z-40 tw-w-64 tw-h-screen tw-pt-20 tw-transition-transform tw--translate-x-full tw-bg-white tw-border-r tw-border-gray-200 sm:tw-translate-x-0 dark:tw-bg-gray-800 dark:tw-border-gray-700" aria-label="Sidebar">
                <div className="tw-h-full tw-px-3 tw-pb-4 tw-overflow-y-auto tw-bg-white dark:tw-bg-gray-800">
                    <ul className="tw-space-y-2 tw-font-medium">
                        <li>
                            <a href="#" className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-rounded-lg dark:tw-text-white hover:tw-bg-gray-100 dark:tw-hover:bg-gray-700 tw-group">
                                <svg className="tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 dark:tw-text-gray-400 tw-group-hover:text-gray-900 dark:tw-group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                                </svg>
                                <span className="tw-ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-rounded-lg dark:tw-text-white hover:tw-bg-gray-100 dark:tw-hover:bg-gray-700 tw-group">
                                <svg className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 dark:tw-text-gray-400 tw-group-hover:text-gray-900 dark:tw-group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm0 10h-4.286A1.857 1.857 0 0 0 10 11.857v4.286C10 17.169 10.831 18 11.857 18h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Zm-10 0H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Z"/>
                                </svg>
                                <span className="tw-flex-1 tw-ml-3">Kanban</span>
                                <span className="tw-inline-flex tw-items-center tw-justify-center tw-px-2 tw-ml-3 tw-text-sm tw-font-medium tw-text-blue-800 tw-bg-blue-100 tw-rounded-full dark:tw-bg-blue-900 dark:tw-text-blue-300">Pro</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-rounded-lg dark:tw-text-white hover:tw-bg-gray-100 dark:tw-hover:bg-gray-700 tw-group">
                                <svg className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 dark:tw-text-gray-400 tw-group-hover:text-gray-900 dark:tw-group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M1 18h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-5.5V9h.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1.5a1.5 1.5 0 0 0-3 0H7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h.5v3H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Z"/>
                                    <path d="M13.031 0a1 1 0 0 0-.926.628l-1 2.5a1 1 0 1 0 1.852.741l1-2.5A1 1 0 0 0 13.031 0ZM7 1a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2H7ZM3.043.628a1 1 0 0 0-.926 1.372l1 2.5a1 1 0 0 0 1.852-.74l-1-2.5A1 1 0 0 0 3.043.628Z"/>
                                </svg>
                                <span className="tw-flex-1 tw-ml-3">Inbox</span>
                                <span className="tw-inline-flex tw-items-center tw-justify-center tw-w-3 tw-h-3 tw-ml-2 tw-text-sm tw-font-medium tw-text-blue-800 tw-bg-blue-100 tw-rounded-full dark:tw-bg-blue-900 dark:tw-text-blue-300">3</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-rounded-lg dark:tw-text-white hover:tw-bg-gray-100 dark:tw-hover:bg-gray-700 tw-group">
                                <svg className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 dark:tw-text-gray-400 tw-group-hover:text-gray-900 dark:tw-group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8.75 2a.75.75 0 0 1 .75-.75h9A.75.75 0 0 1 19.25 2v9a.75.75 0 0 1-1.5 0V4.81L10.28 12.28a.75.75 0 0 1-1.06-1.06L16.69 3.5H9.5A.75.75 0 0 1 8.75 2ZM1.5 4.75A.75.75 0 0 1 2.25 4h4.5a.75.75 0 0 1 0 1.5H3.81l4.47 4.47a.75.75 0 0 1-1.06 1.06L2.75 6.5v2.94a.75.75 0 0 1-1.5 0v-4.5Z"/>
                                    <path d="M2.25 10a.75.75 0 0 1 .75.75v5.69h14V12.5a.75.75 0 0 1 1.5 0v4.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V10.75a.75.75 0 0 1 .75-.75Z"/>
                                </svg>
                                <span className="tw-flex-1 tw-ml-3">Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-rounded-lg dark:tw-text-white hover:tw-bg-gray-100 dark:tw-hover:bg-gray-700 tw-group">
                                <svg className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 dark:tw-text-gray-400 tw-group-hover:text-gray-900 dark:tw-group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M15 1H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 14H4v-4h3v4Zm0-6H4V4h3v4Zm7 6h-5v-4h5v4Zm0-6h-5V4h5v4Z"/>
                                </svg>
                                <span className="tw-flex-1 tw-ml-3">Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-rounded-lg dark:tw-text-white hover:tw-bg-gray-100 dark:tw-hover:bg-gray-700 tw-group">
                                <svg className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 dark:tw-text-gray-400 tw-group-hover:text-gray-900 dark:tw-group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M15 3H3a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2Z"/>
                                    <path d="M16 7H2a1 1 0 0 0-1 1v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1Zm-5.5 8.86a1 1 0 0 1-1 0L7 13.88l-1.5.86a1 1 0 0 1-1.45-1.05l.28-1.64-1.19-1.16a1 1 0 0 1 .55-1.71l1.64-.24.73-1.48a1 1 0 0 1 1.79 0l.73 1.48 1.64.24a1 1 0 0 1 .55 1.71l-1.19 1.16.28 1.64a1 1 0 0 1-1.45 1.05L9 13.88l-1.5.86-.28-1.64a1 1 0 0 1 1.45-1.05L9 12.12l.28 1.64a1 1 0 0 1-1.45 1.05L9 13.88Z"/>
                                </svg>
                                <span className="tw-flex-1 tw-ml-3">Shopping</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;
