import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import ResourcesPage from './pages/ResourcesPage'
import HomePage from './pages/HomePage'
import ContributePage from './pages/ContributePage'
import CreditsPage from './pages/CreditsPage'
import NotFoundPage from './pages/NotFoundPage'
import BasicWallsPage from './pages/BasicWallsPage'
import ComingSoonPage from './pages/ComingSoonPage'
import GuideTemplatePage from './pages/GuideTemplatePage'
import TransparantTexture from './pages/TransparantTexture'
import InterfacePage from './pages/Interface'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="contribute" element={<ContributePage />} />
        <Route path="credits" element={<CreditsPage />} />
        <Route path="guides/basic-walls" element={<BasicWallsPage />} />
        <Route path="guides/interface" element={<InterfacePage />} />
        <Route path="guides/Transparant-Texture" element={<TransparantTexture />} />
        <Route
          path="guides/:guideSlug"
          element={<ComingSoonPage />}
        />
        <Route path="guide-template" element={<GuideTemplatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App