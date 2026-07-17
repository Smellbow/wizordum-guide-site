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
import CutPaste from './pages/CutPaste'
import AdditiveLoad from './pages/AdditiveLoad'
import Stacking from './pages/Stacking'
import PlaceWithTexture from './pages/PlaceWithTexture'
import TestingMaps from './pages/TestingMaps'
import ActorsPage from './pages/ActorsPage'

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
        <Route path="guides/cut-paste" element={<CutPaste />} />
        <Route path="guides/additive-load" element={<AdditiveLoad />} />
        <Route path="guides/copying-stacks" element={<Stacking />} />
        <Route path="guides/textured-blocks" element={<PlaceWithTexture />} />
        <Route path="guides/testing-maps" element={<TestingMaps />} />
        <Route path="actors" element={<ActorsPage />} />
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